import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'src/content/articles';
let failed = false;
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.name === '.gitkeep') continue;
  if (!entry.isDirectory() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name)) {
    console.error(`${root}/${entry.name}: expected a slug folder`);
    failed = true;
    continue;
  }
  const dir = join(root, entry.name);
  let content;
  try {
    content = await readFile(join(dir, 'article.md'), 'utf8');
  } catch {
    console.error(`${dir}: article.md is missing`);
    failed = true;
    continue;
  }
  try {
    const log = await readFile(join(dir, 'log.md'), 'utf8');
    if (!log.trim()) throw new Error('empty');
  } catch {
    console.error(`${dir}: log.md is missing or empty`);
    failed = true;
  }
  const image = content.match(/^image:\s*["']?(image\.(?:png|jpe?g|webp))["']?\s*$/im)?.[1];
  if (!image) {
    console.error(`${dir}: image must be a local image.png, image.jpg, or image.webp`);
    failed = true;
  } else {
    try { await access(join(dir, image)); }
    catch { console.error(`${dir}: image is missing: ${image}`); failed = true; }
  }
  if (!/^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n\s*\S/m.test(content)) {
    console.error(`${dir}: article body is empty`);
    failed = true;
  }
}
if (failed) process.exitCode = 1;
else console.log('Article folders, images, and logs validated.');
