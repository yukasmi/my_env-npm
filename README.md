# my npm-scripts
---

## 目次

- [概要](#概要)
- [制作情報](#制作情報)
- [ドメイン](#ドメイン)
- [開発サイト](#開発サイト)
- [基本ガイドライン](#基本ガイドライン)
- [ブラウザレギュレーション](#ブラウザレギュレーション)
- [制作環境](#制作環境)
- [ディレクトリ構造](#ディレクトリ構造)
- [npm-commands](#npm-commands)
- [Sassファイル設計](#Sassファイル設計)
- [更新履歴](#更新履歴)


## 概要

npm-scriptsを利用したフロントエンド開発テンプレート。

ブラウザレギュレーション、制作情報はプロジェクト毎に修正してください。

## 制作情報

### ドメイン

[example.com](http://www.example.com/)


### 開発サイト

- 静的：[http://example-test.com/](http://example-test.com/)
- 動的：[http://example-dev.com/](http://example-dev.com/)


### 基本ガイドライン

[http://hogehoge/](http://hogehoge/)


### ブラウザレギュレーション

#### Windows 10

- IE 11
- Edge+
- Google Chrome+
- Mozilla Firefox+

#### macOS (10.12)

- Safari


## 制作環境

### 言語

- php
- html5
- css3
- javascript（ES6）

### フレームワーク

- [Sass](http://sass-lang.com/)
- [jQuery 3.2.1](http://jquery.com/)
- [node](https://nodejs.org)

### ビルド、トランスパイラ

- [npm-scripts](https://docs.npmjs.com/misc/scripts)
- [webpack](https://webpack.js.org)
- [babel](https://babeljs.io)
- [gulp](http://gulpjs.com)

### プラグイン

- 未使用

### エディタ

- [Sublime text 3](http://www.sublimetext.com/3)

#### package.json

- "autoprefixer": "^8.1.0",
- "babel-core": "^6.26.0",
- "babel-loader": "^7.1.4",
- "babel-preset-env": "^1.6.1",
- "babel-preset-es2015": "^6.24.1",
- "babel-register": "^6.26.0",
- "browser-sync": "^2.23.6",
- "cssmin": "^0.4.3",
- "group-css-media-queries": "^1.4.1",
- "gulp": "^3.9.1",
- "gulp-consolidate": "^0.2.0",
- "gulp-iconfont": "^9.1.0",
- "gulp-rename": "^1.2.2",
- "gulp.spritesmith": "^6.9.0",
- "lodash": "^4.17.5",
- "node-sass": "^4.7.2",
- "npm-run-all": "^4.1.2",
- "postcss-assets": "^5.0.0",
- "postcss-cli": "^5.0.0",
- "source-map-loader": "^0.2.3",
- "watch": "^1.0.2",
- "watchify": "^3.11.0",
- "webpack": "^4.1.1",
- "webpack-cli": "^2.0.12"


## ディレクトリ構造

開発・本番環境も基本的には同じだと思います。

```
example.com/
|
├── config
│   ├── autoprefixer.json
│   ├── browserify.json
│   └── bs-config.js
├── gulpfile.babel.js
├── package-lock.json
├── package.json
├── public
│   ├── .htaccess
│   ├── _codeguide.php
│   ├── _icon-sample.php
│   ├── assets
│   │   ├── css
│   │   │   ├── app.css
│   │   │   ├── app.css.map
│   │   │   └── app.min.css
│   │   ├── fonts
│   │   │   ├── icon.eot
│   │   │   ├── icon.ttf
│   │   │   └── icon.woff
│   │   ├── img
│   │   │   ├── favicon.ico
│   │   │   ├── sample.jpg
│   │   │   └── sample_on.jpg
│   │   ├── include
│   │   │   ├── _end_of_body.php
│   │   │   ├── _footer.php
│   │   │   ├── _header.php
│   │   │   ├── _html_header.php
│   │   │   ├── _nav.php
│   │   │   ├── _side.php
│   │   │   ├── _start_of_body.php
│   │   │   └── site_config.php
│   │   └── js
│   │       ├── app.js
│   │       └── libs
│   │           ├── css_browser_selector.min.js
│   │           └── jquery-3.2.1.min.js
│   └── index.php
├── src
│   ├── _icons
│   │   ├── check.svg
│   │   ├── template.css
│   │   └── template.php
│   ├── _img
│   ├── _js
│   │   ├── app.js
│   │   ├── app_jquery.js
│   │   ├── uac.js
│   │   └── utils.js
│   └── _sass
│       ├── app.scss
│       ├── foundation
│       │   ├── base
│       │   │   ├── _default.scss
│       │   │   ├── _normalize.scss
│       │   │   ├── _reset.scss
│       │   │   └── _ress.scss
│       │   ├── function
│       │   │   └── _fontsize.scss
│       │   └── mixin
│       │       ├── _mixin_animation.scss
│       │       ├── _mixin_border.scss
│       │       ├── _mixin_display.scss
│       │       ├── _mixin_font.scss
│       │       ├── _mixin_gradient.scss
│       │       ├── _mixin_hover-effect.scss
│       │       ├── _mixin_icon.scss
│       │       ├── _mixin_layout.scss
│       │       ├── _mixin_media.scss
│       │       ├── _mixin_mediaquery.scss
│       │       ├── _mixin_position.scss
│       │       ├── _mixin_sass.scss
│       │       ├── _mixin_text.scss
│       │       └── _partial.scss
│       ├── layout
│       │   ├── _container.scss
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   ├── _main.scss
│       │   ├── _nav.scss
│       │   └── _side.scss
│       ├── object
│       │   ├── compornent
│       │   │   ├── _button.scss
│       │   │   ├── _form.scss
│       │   │   ├── _grid.scss
│       │   │   ├── _media.scss
│       │   │   ├── _table.scss
│       │   │   ├── _title.scss
│       │   │   └── _ui.scss
│       │   ├── modules
│       │   │   ├── _iconfont.scss
│       │   │   └── _sprites.scss
│       │   ├── page
│       │   │   ├── _base.scss
│       │   │   ├── _codeguide.scss
│       │   │   ├── _index.scss
│       │   │   └── _page-a.scss
│       │   ├── project
│       │   │   ├── _breadcrumb.scss
│       │   │   └── _gnav.scss
│       │   ├── support
│       │   │   └── _state.scss
│       │   └── utility
│       │       ├── _align.scss
│       │       ├── _layout.scss
│       │       ├── _margin.scss
│       │       └── _text.scss
│       ├── settings
│       │   ├── _colors.scss
│       │   └── _variables.scss
│       └── vendor
│           └── _override.scss
├── .babelrc
├── .csscomb.json
├── .editorconfig
├── .gitignore
├── README.md
├── webpack.config.js
└── webpack.config.prod.js
```


## npm-commands



## Sassファイル設計

```
_sass/
|
|— foundation/
|     |— base/
|     |     |— _default.scss    // デフォルトスタイル
|     |     |— _normalize.scss  // normalize（未使用）
|     |     |— _reset.scss      // HTML5 doctor Reset CSS（未使用）
|     |     `— _ress.scss       // ress.css • v1.1.2
|     |
|     `— mixins/
|           |— _mixin_animation.scss
|           |— _mixin_border.scss
|           |— _mixin_display.scss
|           |— _mixin_font.scss
|           |— _mixin_gradient.scss
|           |— _mixin_icon.scss
|           |— _mixin_layout.scss
|           |— _mixin_media.scss
|           |— _mixin_mediaquery.scss
|           |— _mixin_position.scss
|           |— _mixin_sass.scss  // sass簡略化
|           |— _mixin_text.scss
|           `— _partial.scss     // importファイル
|
|— layout/
|     |— _container.scss
|     |— _footer.scss
|     |— _header.scss
|     |— _nav.scss
|     |— _main.scss
|     `— _side.scss
|
|— object/
|     |— compornent/
|     |     |— _button.scss
|     |     |— _form.scss
|     |     |— _grid.scss
|     |     |— _media.scss
|     |     |— _section.scss
|     |     |— _table.scss
|     |     |— _title.scss
|     |     `— _ui.scss
|     |
|     |— modules/
|     |     |— _iconfont.scss // アイコンフォント（gulp font で自動生成）
|     |     `— _sprite.scss   // css sprite（gulp sprite で自動生成）
|     |
|     |— page/
|     |     |— _base.scss     // ページ共通
|     |     |— _page-a.scss   // ページ-a
|     |     |— _top.scss      // TOPページ
|     |     ...
|     |
|     |— project/
|     |     |— _breadcrumb.scss  // パンくず
|     |     |— _gnav.scss        // グローバルナビゲーション
|     |     ...
|     |
|     `— utility/
|           |— _margin.scss  // margin / padding汎用クラス
|           |— _layout.scss  // レイアウト汎用クラス
|           `— _text.scss  // テキスト汎用クラス
|
|— settings/
|     |— _colors.scss     // カラー設定
|     `— _variables.scss  // 各種変数設定
|
|— vendor
|     |— _override.scss   // 各プラグイン上書き用css
|     |— ・・・
|
`— app.css  // 本体
```


## 更新履歴

- 18/03/26 - initial commit


<p style="margin-top: 3em;text-align: right;"><a href="#">↑ TOPヘ戻る</a></p>

