import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const ignored = new Set(['.git', 'node_modules', 'scripts']);
const files = [];

async function scan(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignored.has(entry.name)) continue;

    const relativePath = path.posix.join(relative, entry.name);
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await scan(fullPath, relativePath);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.mp3')) {
      files.push(relativePath);
    }
  }
}

await scan(root);
files.sort();

await writeFile(
  path.join(root, 'music.json'),
  JSON.stringify({ files }, null, 2) + '\n',
  'utf8',
);

console.log(`Создан music.json: найдено MP3 — ${files.length}`);
