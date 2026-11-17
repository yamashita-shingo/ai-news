# 制作ログ

- テーマ：2026年11月17日のAIニュース。OpenAIの医療向けコンピューター操作エージェントを選定。
- 記事：`src/content/articles/healthcare-computer-use/article.md`
- 画像：`src/content/articles/healthcare-computer-use/image.png`
- 調査日：2026年11月17日（日本時間）
- 確認した出典：[Advancing computer-use agents for healthcare teams](https://openai.com/index/advancing-computer-use-for-healthcare-teams/)、[More ways to move care forward with ChatGPT for Healthcare](https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare/)。いずれもOpenAI、2026年11月16日発表。
- 制作：合成データによるMRI申請デモ、評価条件と限界、導入上の管理を解説。画像生成ツールで医療者による確認を表す概念図を生成。3人の架空コメントは辛口批評、技術解説、読者の疑問として作成。
- 検証：`npm run check`、`npm run build` を実行したが、いずれも npm が PATH 上になく起動できなかった。CI での検証は未確認。出典と画像は制作時に確認。

## 2026年11月18日：記事の改稿

- 11月17日に注目されたニュースとして Qwen4-Max、医療向けAI、カリフォルニア州によるOpenAI提訴の3件に拡充。各出来事の日付と出典を記載し、訴訟の主張とOpenAI側の説明を区別した。
- 追加確認：[Alibaba Cloud](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1)、[The Thursday Times](https://thursdaytimes.com/2026/11/17/news/international/alibaba-launches-qwen4-max-a-2-4tn-parameter-ai-model-with-closed-weights/)、[AP通信](https://apnews.com/article/1dd7be56134b4f09fb2fb974803edc69)、[Axios](https://www.axios.com/local/san-francisco/2026/11/16/california-openai-lawsuit-hugging-face-hack)。
- 複数ニュースに合う画像に差し替え、3人のコメントを各人物の個性に合わせて書き直した。出典とコメントの確認、画像の目視確認を実施。ローカルのチェック・ビルドは実行せず、更新後のPRのCIで確認する。
