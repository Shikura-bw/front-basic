## 概要
- テンプレートエンジン: EJS or Pug(Gulp)
- スタイル: SCSS(Webpack)
- JSコンパイル: Webpack
- ローカルサーバ: webpack-dev-server(Buildしないとdestされません！)

## 環境構築
- `yarn install` : インストール

## コマンド
- `yarn watch` : ローカルサーバ起動、watch開始
- `yarn build`: EJS,SCSS,JSのビルド、画像圧縮

## ディレクトリ構造
```
├── README.md
├── _src                      <- config.jsから変更可能
│   ├── assets                <- 基本assets系は全部ここに
│   │   ├── images            <- 圧縮前画像入れる
│   │   ├── js
│   │   │   └── index.js      <- entrypointとなるJS
│   │   └── scss
│   │       └── index.scss    <- entrypointとなるSCSS
│   ├── template              <- HTMLは全部ここ
│   │   └── index.html
│   └── data.json             <- テンプレート内で使う変数置き場
├── config.js                 <- srcとdestのパスを格納してます
├── dist                      <- config.jsから変更可能
│   ├── assets
│   │   ├── images            <- 圧縮後の画像が入る
│   │   ├── css
│   │   │   └── index.css     <- コンパイル後のCSS
│   │   └── js
│   │       └── app.js        <- コンパイル後のJS
│   └── index.html            <- コンパイル後のHTML
├── babel.config.js
├── config.js
├── gulpfile.js
├── imagemin.js
├── package.json
├── postcss.config.js
├── webpack.config.js
└── yarn.lock
```

## コーディングルール
## 納品ファイル精製方法
## Gitについて
## その他