# 記事の確認と公開

ユーザーが記事制作を依頼すると、`create-ai-news` スキルの使用を明示し、その手順に従って記事・画像・コメントを作成し、記事専用ブランチで PR を作る。PR に調査した出典、制作内容、実行した検証と未検証事項を記載する。記事ごとの制作履歴は `src/content/articles/<slug>/log.md` に記録し、記事と同じ PR に含める。

記事制作ではローカルのチェックやビルドを実行せず、PR の GitHub Actions で実行結果を確認する。出典、画像、コメントの内容は別途人が確認する。

## PR の作成手順

記事専用ブランチをプッシュ後、`git credential fill` で GitHub の既存認証情報を取得し、GitHub REST API の `POST /repos/yamashita-shingo/ai-news/pulls` で `head` に記事ブランチ、`base` に `main` を指定して PR を作成する。PR 番号を取得したら `PATCH /repos/yamashita-shingo/ai-news/pulls/<番号>` で記事プレビュー URL を本文に追記する。認証情報はメモリ内で扱い、ログやファイル、コマンド出力に記録しない。認証・権限やネットワークの制約で実行できない場合は原因と未完了の操作を報告する。

## プレビューと公開

PR 作成後、GitHub Actions が同じリポジトリ内の PR 用に公開プレビューを生成する。URL は `https://yamashita-shingo.github.io/ai-news/previews/pr-<PR番号>/`（記事詳細はその下の `articles/<slug>/`）。更新の反映には CI と Pages 更新の完了を待つ。プレビューもインターネット上で閲覧できる。ユーザーは PR とプレビューで成果物を確認し、必要なら修正を依頼する。ユーザー自身による `main` へのマージが公開承認となる。マージ後、GitHub Actions がチェックとビルドを実行し、成功した成果物を GitHub Pages に公開する。承認フォルダは使用しない。

公開先は https://yamashita-shingo.github.io/ai-news/ 。リポジトリ設定の Pages の Source は GitHub Actions とする。公開後は対象記事と一覧のリンク、画像、コメントを確認し、失敗時は Actions のログを調べる。

`create-ai-news` による記事制作以外の変更は、別途指定がなければ PR を作成せず、`main` にコミット・プッシュする。記事のレビュー・承認と切り分けて扱う。

記事一覧はビルド時に記事フォルダから生成される。記事フォルダの追加や削除は記事専用 PR で確認し、main にマージ後のデプロイで一覧・詳細ページ・画像に反映される。ローカルでフォルダを消しただけでは公開サイトは変わらない。

PR を閉じると次の Pages 更新でプレビューも削除される。同一リポジトリからの PR のみ自動プレビュー対象。外部フォークからの PR は検証のみ行う。
