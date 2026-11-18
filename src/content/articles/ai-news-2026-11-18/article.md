---
title: "11月18日のAIニュース｜Microsoftの特化型AI、NTTの業務知識学習、NVIDIAの増収"
description: "MicrosoftがIgniteで用途別のAIモデルを発表。NTTは業務マニュアルを学習データに変える研究をフォーラムで紹介予定。NVIDIAのデータセンター売上高は前年同期の2倍を超えた。"
date: 2026-11-18
category: "AI NEWS"
image: "image.png"
imageAlt: "コードや画像、音声波形を映すノートパソコン、業務マニュアルの上に浮かぶ立方体、GPUボードとサーバーラックを並べたイラスト。"
sources:
  - title: "Microsoft AI｜Microsoft Ignite 2026で発表したMAIモデル"
    url: "https://microsoft.ai/news/microsoft-ignite-2026/"
  - title: "Microsoft｜Ignite 2026の基調講演日程"
    url: "https://news.microsoft.com/events/ignite/2026/live-news/"
  - title: "Microsoft Azure｜Foundryのモデル発表と提供条件"
    url: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/from-model-choice-to-your-durable-advantage-build-ai-that-keeps-improving/4573609"
  - title: "NTT｜少量データから特定の専門性を有したLLMにチューニングする技術を確立"
    url: "https://prtimes.jp/main/html/rd/p/000000075.000181531.html"
  - title: "NTT R&D FORUM 2026｜開催概要"
    url: "https://www.rd.ntt/forum/2026/"
  - title: "NVIDIA｜2027年度第3四半期決算"
    url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx"
  - title: "Axios｜NVIDIAの決算報道"
    url: "https://www.axios.com/2026/11/17/nvidia-earnings-jensen-huang-colette-kress"
comments:
  a: "軽量版が安いという話は聞き飽きた。見たいのは、外したときのやり直しまで含めた請求書だ。安いモデルを選んだ担当者が後始末まで引き受けるなら、経費が部署を移っただけだろう。"
  b: "NTTの実験は、教科書で勉強したあとに、その範囲で小テストを受けるのに似ています。仕事で使うなら、マニュアルにない質問で『分からない』と答えられるか、改訂後に古い手順を案内しないかも確かめたいですね。"
  c: "マニュアルのどこに書いてあるか分からないとき、聞くだけで該当ページも出してくれたら助かりそう。『この手続き、今月も同じ？』と聞いたときに、何月版を見て答えたのかも知りたいです。"
---

2026年11月18日（日本時間）のAIニュースを3件まとめた。Microsoftは開発や画像編集に使う自社モデルの選択肢を増やし、NTTは社内文書から業務に詳しいAIを作る研究を紹介する。計算基盤を供給するNVIDIAでは、データセンター部門が増収をけん引した。

## Microsoft、複雑な開発と日常作業に向けた2つのコーディングモデル

Microsoftは米国時間11月17日（日本時間18日）、年次イベント「Ignite 2026」で、自社のAIモデル群「MAI」の新モデルを発表した。開発向けの **MAI-Code-2** は複数の工程を伴う変更や大規模なコード整理を想定し、**MAI-Code-2-Flash** は日常的なコーディング作業を多数処理する用途に合わせている。画像生成・編集向けのMAI-Image-2.7なども発表した。

AzureのAI開発基盤「Foundry」では、Code-2-Flashは利用者を限定したプレビューと案内された。開発チームが2つを比較するなら、呼び出し単価に加え、修正のやり直しや人のレビューを含めて、1件を完了するまでの費用と時間を見ると違いが分かりやすい。 [Microsoft AIの発表](https://microsoft.ai/news/microsoft-ignite-2026/)・[Foundryの提供条件](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/from-model-choice-to-your-durable-advantage-build-ai-that-keeps-improving/4573609)

## NTT、業務マニュアルをFAQなどに変えてAIを追加学習

18日開幕の「NTT R&D FORUM 2026」で、NTTは限られた業務文書を使って大規模言語モデル（LLM）を調整する研究を展示する予定だ。12日に発表した手法では、マニュアルをもとにAIが仕様書やFAQなど複数の形式の学習データを作り、それをモデルの追加学習に使う。

NTTは実際の業務マニュアルを用い、自社の「tsuzumi 2」などで、資料に書かれた内容を問う問題の正答率を学習前後で比較した。業務に導入する際には、マニュアルの範囲外の質問や、手順の改訂後にどう答えるかも評価したい。 [NTTの研究発表](https://prtimes.jp/main/html/rd/p/000000075.000181531.html)・[フォーラム開催概要](https://www.rd.ntt/forum/2026/)

## NVIDIA、データセンター売上高が前年同期比110%増

NVIDIAが米国時間17日（日本時間18日）に発表した2027年度第3四半期（2026年10月25日終了）の売上高は **1,158億ドル** で、前年同期比103%増だった。うちデータセンター部門は **1,076億ドル** で同110%増。全社売上高の約93%を占めた。

同社はデータセンター向けの新システム「Vera Rubin NVL72」の出荷開始も明らかにした。売上の内訳からは、計算基盤を提供するデータセンター事業が同社の業績を支える規模が分かる。 [NVIDIAの決算発表](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx)・[Axiosの決算報道](https://www.axios.com/2026/11/17/nvidia-earnings-jensen-huang-colette-kress)
