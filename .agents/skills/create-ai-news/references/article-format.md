# 記事形式

`src/content/articles/<slug>.md` に UTF-8 の Markdown を置く。slug は英小文字・数字・ハイフンを使い、既存記事と重複させない。画像は `public/images/` に保存し、メタデータには `/images/` から始まるパスを指定する。記事の型の正本は `src/content.config.ts`。

```markdown
---
title: "記事タイトル"
description: "記事の概要"
date: 2026-11-17
category: "AI NEWS"
image: "/images/example.png"
imageAlt: "画像の内容を伝える説明"
sources:
  - title: "出典のタイトル"
    url: "https://example.com/source"
comments:
  a: "辛口のコメント"
  b: "専門家のコメント"
  c: "一般読者のコメント"
---

記事本文。
```
