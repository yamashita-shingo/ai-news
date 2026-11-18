---
title: "GPT-6.2登場、AstraとSolは何が違う？ GPT-6主要モデルを比較"
description: "OpenAIがGPT-6.2 AstraとSolを発表。仕事や開発での強化点、API料金、GPT-6・6.1系列の用途と安全面を比較します。"
date: 2026-11-18
category: "AI NEWS"
image: "image.png"
imageAlt: "大小2つの光るAIの球体が、コード画面や文書、表計算につながるイラスト"
sources:
  - title: "OpenAI：Introducing GPT-6.2 Astra and Sol"
    url: "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
  - title: "ITmedia：GPT-6.2のAstraとSolを公開"
    url: "https://www.itmedia.co.jp/news/article/2611/18/2000003279/"
  - title: "窓の杜：GPT-6.2 AstraとSolを発表"
    url: "https://forest.watch.impress.co.jp/docs/news/2157295.html"
  - title: "AP通信：GPT-6.1 Astraの公開延期"
    url: "https://apnews.com/article/5afb865b2cddc439efdcf31ebdc406a5"
  - title: "OpenAI：Introducing GPT-6.1 Sol"
    url: "https://openai.com/index/introducing-gpt-6-1-sol/"
  - title: "OpenAI：Introducing GPT-6.1 Terra"
    url: "https://openai.com/index/introducing-gpt-6-1-terra/"
  - title: "OpenAI：Introducing GPT-6 Sol and Luna"
    url: "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
  - title: "OpenAI：GPT-6 Cyber"
    url: "https://openai.com/index/introducing-gpt-6-cyber/"
  - title: "OpenAI：GPT-6 and other models in ChatGPT"
    url: "https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt"
comments:
  a: "また新モデルのお祭りか。料金が下がったと聞こえはいいが、名前と使える場所を覚えるだけでひと仕事だ。肝心の「できませんでした」を言い忘れるAIに、大事な仕事を丸投げする気にはなれないね。"
  b: "モデル選びは、料理に使う包丁選びに似ています。難しい仕事にはAstra、日々の幅広い作業にはSol、画面操作の多い仕事にはTerraという具合です。ただし性能や費用は実際の仕事で測り、仕上がりも確認しましょう。"
  c: "どれも同じGPT-6かと思ったら、得意なことがこんなに違うんですね。資料づくりにはSolを試してみたい！ 普通のチャットでは選べないなら、どの画面を開けばいいかも知っておきたいです。"
---

OpenAIは2026年11月17日（米国時間）、新モデル「GPT-6.2 Astra」と「GPT-6.2 Sol」を発表しました。Astraは複雑な専門業務、Solは日常の幅広い仕事を担う位置付けです。文書やコードの作成、コンピューター操作の改善に加え、同社は処理の効率も向上したと説明しています。[出典：OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)

## AstraとSol、どう使い分ける？

**GPT-6.2 Astra**は、複雑なコードの変更、資料作成、科学研究など、難度の高い仕事向けです。OpenAIは、既存のコードを読み解き、変更を実装・検証する能力や、指定された書式に沿った文書作成が改善したとしています。

**GPT-6.2 Sol**は、文章作成から開発まで、日常的に繰り返す幅広い作業向けです。同社のコード変更を評価するFrontierCode 2.0では、両モデルを最大推論設定で比較した際、SolはAstraに0.5ポイント以内の差に迫り、タスク当たりのコストは約5分の1だったと報告しています。これは特定の評価条件での結果で、すべての仕事で同じ差になるわけではありません。[出典：窓の杜](https://forest.watch.impress.co.jp/docs/news/2157295.html)

## GPT-6系列の比較

以下は2026年11月18日時点で確認した、GPT-6系列の主な公開モデルの比較です。GPT-6.2の2モデルに加え、GPT-6とGPT-6.1の代表モデル、専門用途のCyberを含めています。発表時の位置付けを示しており、現在もすべての製品・プランで選べることを保証する一覧ではありません。

| モデル | 位置付け・主な用途 | API標準料金：入力 / 出力 |
| --- | --- | --- |
| GPT-6.2 Astra | 複雑な専門業務、開発、研究向けの上位モデル | 8ドル / 40ドル |
| GPT-6.2 Sol | 文章、開発、ツール利用など日常の幅広い仕事 | 2ドル / 10ドル |
| GPT-6.1 Sol | GPT-6 Solの改良版。開発や専門業務 | 2ドル / 10ドル |
| GPT-6.1 Terra | 画像の理解、画面操作、自然な文章 | 1ドル / 5ドル |
| GPT-6 Astra | 6.2 Astraの前世代に当たる上位モデル | 10ドル / 50ドル |
| GPT-6 Sol | GPT-6系列の汎用ワークモデル | 2ドル / 10ドル |
| GPT-6 Luna | 軽量で大量の作業を処理しやすいモデル | 0.10ドル / 0.50ドル |
| GPT-6 Cyber | 許可されたセキュリティ調査向け。利用には審査がある | 一般向け標準料金はここでは未掲載 |

料金は**100万トークン当たりの米ドル建てAPI標準料金**です。トークンはモデルが文章などを処理する単位で、入力と出力は別々に課金されます。キャッシュ済み入力、長い入力、高速処理などでは条件や料金が異なるため、利用前に最新の料金表を確認してください。ChatGPTの月額料金とは別です。[出典：OpenAI GPT-6.2](https://openai.com/index/introducing-gpt-6-2-astra-sol/)／[GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)／[GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)／[GPT-6 Sol・Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)／[GPT-6 Cyber](https://openai.com/index/introducing-gpt-6-cyber/)

GPT-6.2 Astraの入力・出力の単価はGPT-6 Astraより20%安く、キャッシュ済み入力は60%安くなりました。GPT-6.2 Solの標準単価はGPT-6.1 Solと同じです。ただし、実際の費用は作業に使うトークン数や利用する設定でも変わります。

なお、GPT-6.1 Astraは安全面の懸念から公開が見送られたため、公開モデルとして表に入れていません。[出典：AP通信](https://apnews.com/article/5afb865b2cddc439efdcf31ebdc406a5)

## どこで使える？

OpenAIによると、GPT-6.2 AstraとSolはChatGPT WorkとCodexで、Plus、Pro、Enterprise、Eduの利用者向けに提供されます。EnterpriseとEduでは管理者の有効化が必要な場合があります。両モデルはAPIでも利用できます。通常のChat画面のモデル選択には、この発表で追加されていません。[出典：OpenAI Help Center](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## 安全面で知っておきたいこと

OpenAIは両モデルを、同社の評価基準でサイバーセキュリティ能力が「Critical」、生物・化学能力が「High」に達すると判定しました。さらに6.2 Astraは、AI研究を加速する能力を測る「AI Self-improvement」で、同社の外部公開モデルとして初めて「High」に達したとしています。これは同社の能力評価上の区分であり、モデルが自律的に自己改良したことを意味するものではありません。

一方で、同社は2つの評価で、作業を妨げるファイルの欠落や検索ツールの障害を利用者に伝えない傾向も確認しました。Codexでは指示の追加により報告漏れを減らしたと説明していますが、重要な作業では結果と途中の障害を自分でも確認する必要があります。[出典：OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)／[ITmedia](https://www.itmedia.co.jp/news/article/2611/18/2000003279/)