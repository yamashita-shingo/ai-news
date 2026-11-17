# 記事形式

記事ごとに `src/content/articles/<slug>/` を作成する。slug は英小文字・数字・ハイフンを使い、既存記事と重複させない。記事、画像、制作ログを同じフォルダに保存する。記事の型の正本は `src/content.config.ts`。

```text
src/content/articles/<slug>/
  article.md  # 本文・出典・コメント
  image.png   # または image.jpg / image.webp
  log.md      # 制作履歴
```

`article.md` の例：

```markdown
---
title: "記事タイトル"
description: "記事の概要"
date: 2026-11-17
category: "AI NEWS"
image: "image.png"
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

サイトのビルドは本文と画像を使用する。ログはリポジトリに残るがサイトのページや画像として出力しない。
