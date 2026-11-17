import { readdir, readFile, access } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';

const root = resolve('public');
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(path));
    else if (entry.name.endsWith('.md')) result.push(path);
  }
  return result;
}
let failed = false;
for (const file of await walk('src/content/articles')) {
  const content = await readFile(file, 'utf8');
  const image = content.match(/^image:\s*["']?(\/images\/[^\s"']+)/m)?.[1];
  if (!image) { console.error(`${file}: image is missing`); failed = true; continue; }
  const path = resolve(root, `.${image}`);
  if (!path.startsWith(root + sep)) { console.error(`${file}: invalid image path`); failed = true; continue; }
  try { await access(path); } catch { console.error(`${file}: image does not exist: ${image}`); failed = true; }
  if (!/^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n\s*\S/m.test(content)) { console.error(`${file}: article body is empty`); failed = true; }
}
if (failed) process.exitCode = 1;
else console.log('Article files and images validated.');
