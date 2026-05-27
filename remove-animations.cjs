const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Remove imports
            const importDecryptedRegex = /import\s+DecryptedText\s+from\s+['"][^'"]+DecryptedText['"];?\n?/g;
            if (importDecryptedRegex.test(content)) {
                content = content.replace(importDecryptedRegex, '');
                modified = true;
            }

            const importShuffleRegex = /import\s+Shuffle\s+from\s+['"][^'"]+Shuffle['"];?\n?/g;
            if (importShuffleRegex.test(content)) {
                content = content.replace(importShuffleRegex, '');
                modified = true;
            }

            // Replace <DecryptedText text="something" ... /> with "something" or {something}
            const decryptedRegex1 = /<DecryptedText\s+text="([^"]+)"[^>]*\/>/g;
            if (decryptedRegex1.test(content)) {
                content = content.replace(decryptedRegex1, '$1');
                modified = true;
            }
            
            const decryptedRegex2 = /<DecryptedText\s+text=\{([^}]+)\}[^>]*\/>/g;
            if (decryptedRegex2.test(content)) {
                content = content.replace(decryptedRegex2, '{$1}');
                modified = true;
            }

            // Replace <Shuffle text="something" ... /> with "something" or {something}
            const shuffleRegex1 = /<Shuffle\s+text="([^"]+)"[^>]*\/>/g;
            if (shuffleRegex1.test(content)) {
                content = content.replace(shuffleRegex1, '$1');
                modified = true;
            }

            const shuffleRegex2 = /<Shuffle\s+text=\{([^}]+)\}[^>]*\/>/g;
            if (shuffleRegex2.test(content)) {
                content = content.replace(shuffleRegex2, '{$1}');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Modified: ${fullPath}`);
            }
        }
    }
}

processDir(srcDir);
