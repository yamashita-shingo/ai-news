# 制作ログ

- テーマは2026年11月18日（日本時間）のAIニュース。製品発表、国内の研究展示、計算基盤の決算を選んだ。同日分のGPT-6.2発表には既存の比較記事があるため、今回の3件は別の話題から選んだ。
- 記事は `src/content/articles/ai-news-2026-11-18/article.md`。
- 画像は `src/content/articles/ai-news-2026-11-18/image.png`。
- 調査は2026年11月18日19時台（日本時間）。

## 確認した出典

- Microsoft AIのIgnite発表で、コーディング向けモデルと画像モデルの発表内容を確認した。 [Seven new world class models at scalable price-performance](https://microsoft.ai/news/microsoft-ignite-2026/)
- Microsoftのイベント日程で、基調講演の開始時刻が日本時間18日に当たることを確認した。 [Microsoft Ignite 2026 Live News](https://news.microsoft.com/events/ignite/2026/live-news/)
- Azureの発表で、両コーディングモデルの用途とCode-2-FlashのFoundryでの提供条件を確認した。 [From model choice to your durable advantage](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/from-model-choice-to-your-durable-advantage-build-ai-that-keeps-improving/4573609)
- NTTの12日付の研究発表で、学習データの作り方、実験の範囲、展示予定を確認した。 [少量データから特定の専門性を有したLLMにチューニングする技術を確立](https://prtimes.jp/main/html/rd/p/000000075.000181531.html)
- NTTの公式フォーラムページで、18日の開幕を確認した。 [NTT R&D FORUM 2026](https://www.rd.ntt/forum/2026/)
- NVIDIAの決算資料で発表日、対象期間、売上高と増収率、出荷開始を確認し、全社売上高に占めるデータセンターの比率を算出した。Axiosの報道でも全社売上高と公表時期を照合した。 [NVIDIA Announces Financial Results for Third Quarter Fiscal 2027](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx)・[Nvidia posts strong earnings](https://www.axios.com/2026/11/17/nvidia-earnings-jensen-huang-colette-kress)

## 制作と確認

- 画像は組み込みの画像生成ツールで制作した。ノートパソコン、業務マニュアルと立方体、GPUとサーバーラックを1枚に配置し、画像と代替テキストを照合した。
- 黒瀬修司は導入後の手戻り費用、水野結衣は評価条件、田辺悠人は回答の参照元と文書の版に触れた。いずれも架空コメントで、意見や疑問として表現した。
- モデルの性能の再現、業務導入時の精度、展示の実施状況は未確認。チェックとビルドはレビュー用PRのGitHub Actionsで確認する。
