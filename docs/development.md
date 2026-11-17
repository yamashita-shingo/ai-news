# 開発と検証

サイトなどの開発では Node.js 22 で `npm ci`、`npm run check`、`npm run build` を利用できる。ローカル表示は `npm run dev`。依存関係は `package-lock.json` に固定する。記事制作ではローカル検証を行わず、PR の GitHub Actions で確認する。

`npm run check` は Astro の型・コンテンツスキーマ、記事本文、画像、対応する記事制作ログの存在とログが空でないことを検証する。ビルドは GitHub Pages 用の静的ファイルを生成する。どちらも PR とデプロイ時に実行される。出典の正確さ、コメントの妥当性、画像の内容は自動検証だけでは保証できず、制作時と PR レビューで確認する。

公開先の `site` と `base` は `astro.config.mjs` で管理し、内部リンクと画像に `import.meta.env.BASE_URL` を適用する。ローカルの Windows で Application Control によってネイティブモジュールがブロックされる場合は、設定を迂回せず管理者に確認し、GitHub Actions の結果を確認する。
