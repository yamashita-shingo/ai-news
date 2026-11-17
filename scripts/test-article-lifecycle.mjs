import { randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { access, copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
import assert from 'node:assert/strict';

const slug = `lifecycle-check-${randomBytes(6).toString('hex')}`;
const articlesRoot = resolve('src/content/articles');
const fixture = resolve(articlesRoot, slug);
if (!fixture.startsWith(articlesRoot + sep)) throw new Error('Invalid fixture path');
const output = join('dist', 'articles', slug);
const build = () => execFileSync(process.execPath, ['node_modules/astro/astro.js', 'build'], { stdio: 'inherit' });
const exists = async path => access(path).then(() => true, () => false);
let created = false;

try {
  await mkdir(fixture);
  created = true;
  await writeFile(join(fixture, 'article.md'), `---
title: "Lifecycle fixture"
description: "Temporary build test"
date: 2026-01-01
category: "TEST"
image: "image.png"
imageAlt: "Test image"
sources:
  - title: "Example"
    url: "https://example.com"
comments:
  a: "Critic"
  b: "Expert"
  c: "Reader"
---

Temporary article.
`);
  await writeFile(join(fixture, 'log.md'), 'Temporary test log');
  await copyFile('.agents/skills/news-comment-critic/assets/portrait.png', join(fixture, 'image.png'));

  build();
  assert.match(await readFile('dist/index.html', 'utf8'), new RegExp(`articles/${slug}/`));
  assert.ok(await exists(join(output, 'index.html')), 'article page should be generated');
  assert.ok(await exists(join(output, 'image.png')), 'article image should be generated');
  assert.ok(!await exists(join(output, 'log.md')), 'production log must not be published');

  await rm(fixture, { recursive: true });
  created = false;
  build();
  assert.doesNotMatch(await readFile('dist/index.html', 'utf8'), new RegExp(`articles/${slug}/`));
  assert.ok(!await exists(join(output, 'index.html')), 'deleted article page must disappear');
  assert.ok(!await exists(join(output, 'image.png')), 'deleted article image must disappear');
  console.log('Article addition and deletion verified.');
} finally {
  if (created) await rm(fixture, { recursive: true, force: true });
}
