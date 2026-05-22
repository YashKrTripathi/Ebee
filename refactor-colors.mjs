import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

// We want to replace existing color classes with our new design system colors
const replacements = [
  // Typography
  { regex: /font-sans/g, replace: 'font-body' }, // Since the design has Inter for body
  
  // Ambers -> Tertiary
  { regex: /amber-(\d+)/g, replace: 'tertiary-$1' },
  { regex: /amber-/g, replace: 'tertiary-' },
  
  // Emeralds -> Secondary
  { regex: /emerald-(\d+)/g, replace: 'secondary-$1' },
  { regex: /emerald-/g, replace: 'secondary-' },
  
  // Blues & Cyans -> Primary
  { regex: /blue-(\d+)/g, replace: 'primary-$1' },
  { regex: /blue-/g, replace: 'primary-' },
  { regex: /cyan-(\d+)/g, replace: 'primary-$1' },
  { regex: /cyan-/g, replace: 'primary-' },
  
  // Slates & Grays -> Neutral
  { regex: /slate-(\d+)/g, replace: 'neutral-$1' },
  { regex: /slate-/g, replace: 'neutral-' },
  { regex: /gray-(\d+)/g, replace: 'neutral-$1' },
  { regex: /gray-/g, replace: 'neutral-' },

  // Hardcoded dark backgrounds
  { regex: /#040c1e/g, replace: '#1c1e23' }, // Adjusting to a very dark neutral
  { regex: /#020612/g, replace: '#131417' }, 
  { regex: /#06142a/g, replace: '#25272d' },
  { regex: /#0d1527/g, replace: '#232427' },
  { regex: /#020713/g, replace: '#111215' },
  { regex: /#0a1122/g, replace: '#191a1e' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Skip the CSS file for color replacement as we will override it manually
      if (!fullPath.endsWith('index.css')) {
        for (const { regex, replace } of replacements) {
            const newContent = content.replace(regex, replace);
            if (newContent !== content) {
            content = newContent;
            modified = true;
            }
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(SRC_DIR);
console.log('Done refactoring colors!');
