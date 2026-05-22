import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

const replacements = [
  // Text colors
  { regex: /text-white/g, replace: 'text-neutral-800' },
  { regex: /text-neutral-100/g, replace: 'text-neutral-800' },
  { regex: /text-neutral-400/g, replace: 'text-neutral-500' }, // Muted
  
  // Backgrounds
  { regex: /bg-\[#1c1e23\]/g, replace: 'bg-transparent' },
  { regex: /bg-\[#131417\]/g, replace: 'bg-transparent' },
  { regex: /bg-\[#111215\]/g, replace: 'bg-transparent' },
  { regex: /bg-\[#191a1e\]/g, replace: 'bg-neutral-200' }, // Surface
  { regex: /bg-\[#25272d\]/g, replace: 'bg-neutral-200' }, // Surface
  { regex: /bg-\[#232427\]/g, replace: 'bg-neutral-200' }, // Surface
  { regex: /bg-neutral-900\/60/g, replace: 'bg-neutral-200/80 backdrop-blur-sm' },
  { regex: /bg-neutral-900\/80/g, replace: 'bg-neutral-200/90' },
  { regex: /bg-neutral-900/g, replace: 'bg-neutral-200' },
  { regex: /bg-neutral-950/g, replace: 'bg-neutral-200' },
  { regex: /bg-[#0a1122]\/95/g, replace: 'bg-neutral-200/95' },

  // Gradients
  { regex: /bg-gradient-to-t from-\[#111215\] to-\[#1c1e23\]/g, replace: 'bg-gradient-to-t from-neutral-100 to-neutral-50' },
  
  // Borders
  { regex: /border-neutral-900/g, replace: 'border-neutral-300' },
  { regex: /border-neutral-800/g, replace: 'border-neutral-300' },
  
  // Shadows
  { regex: /shadow-lg(?!\s+shadow-)/g, replace: 'shadow-lg shadow-neutral-300/50' },
  { regex: /shadow-xl(?!\s+shadow-)/g, replace: 'shadow-xl shadow-neutral-300/50' },
  { regex: /shadow-2xl(?!\s+shadow-)/g, replace: 'shadow-2xl shadow-neutral-300/50' },
  
  // Buttons and Accents
  { regex: /tertiary-/g, replace: 'primary-' }, // Convert the old amber/tertiary to our new yellow primary accent
  { regex: /secondary-/g, replace: 'primary-' }, // Consolidate secondary emerald to yellow primary accent
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      for (const { regex, replace } of replacements) {
        const newContent = content.replace(regex, replace);
        if (newContent !== content) {
          content = newContent;
          modified = true;
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
console.log('Done refactoring light theme!');
