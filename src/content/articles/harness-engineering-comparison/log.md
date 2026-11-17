# 記事制作ログ

- テーマ：ハーネスエンジニアリングと他のAI開発手法の比較
- 記事：src/content/articles/harness-engineering-comparison/article.md
- 画像：src/content/articles/harness-engineering-comparison/image.png
- 調査日：2026-11-17（日本時間）
- 参照：OpenAI「Harness engineering」（https://openai.com/index/harness-engineering/）、Anthropic「Effective harnesses for long-running agents」（https://www.anthropic.com/research/effective-harnesses-for-long-running-agents）、OpenAI「Model optimization」（https://developers.openai.com/api/docs/guides/model-optimization）、OpenAI「Retrieval」（https://developers.openai.com/api/docs/guides/retrieval）
- 制作：一次情報を基に概要・手法の比較・限界を日本語で作成。記事要約画像を生成し、3つのコメントスキルでそれぞれの視点を作成。
- 検証：`node scripts/validate-articles.mjs` 成功。`npm run check` と `npm run build` はローカル Windows の Application Control が Rollup のネイティブモジュールをブロックし実行できず。記事 PR の GitHub Actions（https://github.com/yamashita-shingo/ai-news/actions/runs/44093041796）でチェック・ビルド・記事追加削除テストが成功。

- 2026-11-17：仕組みの流れを示す図、手法の比較表、実践の手順を追加。既存出典に基づき、例示であることと検証の限界を明記。
