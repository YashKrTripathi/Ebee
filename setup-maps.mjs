import fs from 'fs';
import path from 'path';
import https from 'https';

const publicDir = path.join(process.cwd(), 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Handle redirect
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download from ${url}: ${res.statusCode}`));
        return;
      }
      
      let data = [];
      res.on('data', (chunk) => { data.push(chunk); });
      res.on('end', () => {
        try {
          const buffer = Buffer.concat(data);
          const raw = buffer.toString('utf8');
          // Parse to verify it is valid JSON
          const parsed = JSON.parse(raw);
          fs.writeFileSync(dest, JSON.stringify(parsed), 'utf8');
          console.log(`Saved GeoJSON to ${dest} successfully!`);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const indiaUrl = 'https://cdn.jsdelivr.net/gh/codeforamerica/click_that_hood@master/public/data/india.geojson';
const worldUrl = 'https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json';

const indiaDestPath = path.join(publicDir, 'india_states.json');
const worldDestPath = path.join(publicDir, 'world_countries.json');

console.log('Downloading map assets...');
Promise.all([
  downloadFile(indiaUrl, indiaDestPath),
  downloadFile(worldUrl, worldDestPath)
])
  .then(() => {
    console.log('Map setup complete! Both files successfully downloaded, parsed, and saved.');
  })
  .catch((err) => {
    console.error('Failed to download map assets:', err);
  });
