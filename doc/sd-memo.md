# メモ

- モックサーバ用HTML
  - /mock
- モックサーバ用API
  - /mock/api
- 本番クライアント側静的ファイル
  - /*
- 本番サーバ側モックAPI
  - /*(/api)

- / -> /mock/index.html を返す
- react-router でのルーティングは/mock/**
- ページ
  - ポータルページ
  - API毎の設定ページ
    - /mock/setting/api/**
  - サーバ設定ページへのリンク
    - /mock/setting/server/**

- 設定項目
  - API
    - APIのURL
    - リクエストパラメータ
    - レスポンスJSON
  - サーバ設定
    - レスポンス遅延時間
