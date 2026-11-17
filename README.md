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

1. Codex にニュースのテーマを伝えます。`create-ai-news スキル` が調査、記事・画像生成、3つのコメントスキル、検証の流れを定めています。
2. Codex が記事用ブランチに成果物をコミットして PR を作成します。本文、画像、出典、架空の3人のコメントを確認し、必要に応じて修正を依頼します。
3. あなたが PR をマージすると、GitHub Actions が再検証して GitHub Pages に公開します。承認用フォルダはありません。

初回は GitHub の **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選択してください。公開先は `https://yamashita-shingo.github.io/ai-news/` です。リポジトリ名や所有者が変わる場合は `astro.config.mjs` を更新します。

## ハーネスの構成

- [記事制作スキル](.agents/skills/create-ai-news/SKILL.md)：調査から PR 作成までの流れ。記事形式と編集基準は必要に応じて参照します。
- [開発と検証](docs/development.md)：検証コマンドと制約。
- [確認と公開](docs/publishing.md)：PR の確認と公開の流れ。
