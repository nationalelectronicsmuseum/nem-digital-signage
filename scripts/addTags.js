import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import artifact from '../src/assets/database/artifact.js';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add tags
artifact.forEach((item, index) => {
  item.tag = index;
});

const fileContent = `const data = ${JSON.stringify(artifact, null, 2)};\n\nexport default data;\n`;

fs.writeFileSync(path.join(__dirname, '../src/assets/database/artifact.js'), fileContent);

console.log('Tags added and file saved.');

// Generate constants file
const constants = artifact.map(item => {
  let constName = item.title || item.name || `TAG_${item.tag}`;
  constName = constName
    .toUpperCase()
    .replace('\'', '')
    .replace(/[^A-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return `export const ${constName} = ${item.tag};`;
}).join('\n');

fs.writeFileSync(path.join(__dirname, '../src/assets/ArtifactTags.js'), constants + '\n');

console.log('Tags and constants saved.');