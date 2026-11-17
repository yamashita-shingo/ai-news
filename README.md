# AI SIGNAL

AIニュースを、異なる3つの視点とともに届ける静的サイトです。Codex が制作し、人が PR を確認・マージして公開するハーネスのデモです。

## 開発

Node.js 22 と npm を用意し、以下を実行します。依存関係はロックファイルに固定しています。

```sh
npm ci
npm run dev
npm run check
npm run build
```

このワークスペースに同梱外のローカル Node.js を展開済みの場合、PowerShell では次のコマンドで現在のセッションの PATH に追加できます。`.tools/` は Git 管理対象外です。

```powershell
$env:Path = (Join-Path (Get-Location) '.tools\node-v22.23.5-win-x64') + ';' + $env:Path
node --version
npm.cmd ci
```

## 記事の作成から公開まで

1. Codex にニュースのテーマを伝えます。`AGENTS.md` が調査、記事・画像生成、3つのコメントスキル、検証の流れを定めています。
2. Codex が記事用ブランチに成果物をコミットして PR を作成します。本文、画像、出典、架空の3人のコメントを確認し、必要に応じて修正を依頼します。
3. あなたが PR をマージすると、GitHub Actions が再検証して GitHub Pages に公開します。承認用フォルダはありません。

初回は GitHub の **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選択してください。公開先は `https://yamashita-shingo.github.io/ai-news/` です。リポジトリ名や所有者が変わる場合は `astro.config.mjs` を更新します。

## 記事形式

`src/content/articles/<slug>.md` に Markdown を置きます。画像は `public/images/` に置き、サイトルートからのパスを指定します。記事IDはファイル名です。

```markdown
---
title: "記事タイトル"
description: "記事の概要"
date: 2026-11-17
category: "AI NEWS"
image: "/images/example.png"
imageAlt: "画像の内容を伝える説明"
sources:
  - title: "一次情報のタイトル"
    url: "https://example.com/source"
comments:
  a: "辛口のコメント"
  b: "専門家のコメント"
  c: "一般読者のコメント"
---

本文をここに記載します。
```

記事のメタデータは Astro のスキーマで検証し、画像の存在と本文の有無も確認します。コメントは AI が生成した架空の意見として表示します。
