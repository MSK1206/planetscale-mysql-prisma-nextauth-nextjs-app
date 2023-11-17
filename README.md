# ※Blog機能は現在開発中〜


<a href="https://nextjs-nextauth-app.vercel.app/">
  <h1 align="center">planetscale-mysql-prisma-nextauth-nextjs-app</h1>
</a>

<p align="center">
  Next.js 13 + NextAuth + Prisma with PlanetScale MySQL project.
</p>

<p align="center">
  <a href="https://twitter.com/Msk_init">
    <img src="https://img.shields.io/twitter/follow/:Msk_init" alt="Msk_init Twitter follow" />
  </a>
  <a href="https://github.com/MSK1206/nextjs-nextauth-app">
    <img src="https://img.shields.io/github/stars/MSK1206/planetscale-mysql-prisma-nextauth-nextjs-app?label=MSK1206%2Fplanetscale-mysql-prisma-nextauth-nextjs-app" alt="planetscale-mysql-prisma-nextauth-nextjs-app repo star count" />
  </a>
</p>

<br />

## 概要

planetscale-mysql-prisma-nextauth-nextjs-app は、Next.js を使用した認証付きのウェブアプリケーションのベースとして構築されたプロジェクトです。このプロジェクトでは、NextAuth を使用して簡単に認証を統合できます。
また先進的なサーバーレスMySQLプラットフォームのPlanetScaleをデータベースと利用しており、ブログ機能を構築しています。

<br />

## Features

このプロジェクトでは、いくつかの主要なパッケージとライブラリを使用します。それぞれについて、それぞれについて詳しく説明します。

<br />

- #### **Next.js（公式リンク： [Next.js](https://nextjs.org/)**：
  > Next.jsは、Webアプリケーションを構築するための人気のReactフレームワークです。サーバーサイド・レンダリング、ルーティング、その他の機能を備えています。

<br />

- #### **NextAuth（公式リンク： [NextAuth.js](https://next-auth.js.org/)**：
  > NextAuthは、Next.jsアプリケーションのための認証ライブラリです。認証プロバイダの統合を簡略化し、柔軟な認証システムを提供します。
  >
  > NextAuthの主な特徴は以下のとおりです：
  >
  > - **マルチプロバイダ対応**： Google、GitHub、Facebookなど、さまざまな認証プロバイダを統合できます。アプリケーションごとに異なる認証オプションを簡単に設定できます。
  > - **セッション管理**： NextAuthにはセッション管理が組み込まれており、アプリケーションのユーザーセッションや認証状態を簡単に管理できます。
  > - **カスタム認証**： NextAuthでは、カスタム認証のフローや動作を定義することができます。アプリケーション固有のニーズに合わせて、ユーザー認証と認可の仕組みをカスタマイズできます。
  > - **Secure by default**： クロスサイトリクエストフォージェリ（CSRF）やクロスサイトスクリプティング（XSS）などの一般的なセキュリティ問題を防ぐなど、セキュリティのベストプラクティスに従っています。
  > - **JWT (JSON Web Tokens) サポート**： NextAuth は、セキュアな認証と認可のために JSON Web トークンをサポートしています。
  > - **認証コールバック**： 認証コールバックを定義して、認証プロセスの動作を制御することができます。たとえば、サインイン成功後のリダイレクト動作をカスタマイズできます。

<br />

- #### **@heroicons/react (公式リンク： [Heroicons](https://heroicons.com/))**：
  > Heroiconsは、Webプロジェクトで使用できる、フリーでMITライセンスの高品質なSVGアイコンのセットです。heroicons/react`パッケージを使用すると、Reactアプリケーションでこれらのアイコンを簡単に使用できます。

<br />

- #### **classnames（公式リンク： [classnames](https://www.npmjs.com/package/classnames))**：
  > classnames` ライブラリは、クラス名を条件付きで結合するためのシンプルなユーティリティを提供します。Reactコンポーネントのクラスを動的に追加または削除するためによく使用されます。

<br />

- #### **tailwindcss (公式リンク： [Tailwind CSS](https://tailwindcss.com/))**：
  > Tailwind CSSはユーティリティファーストのCSSフレームワークで、クラスを組み合わせることでユーザーインターフェイスを素早く構築できます。カスタマイズ性が高く、迅速な開発に最適です。

<br />

- #### **daisyui（公式リンク： [DaisyUI](https://daisyui.com/))**：
  > DaisyUIは、Tailwind CSSのためのUIコンポーネントライブラリです。美しくカスタマイズ可能なコンポーネントのセットを追加し、プロジェクトのデザインを強化します。

<br />

- #### **prettier（公式リンク： [Prettier](https://prettier.io/))**：
  > Prettierは、一貫したスタイルになるようにコードを自動的に整形する、意見を反映したコード整形ツールです。きれいで一貫性のあるコードベースを維持するためによく使われます。

<br />

## インストールと実行

このプロジェクトを実行するには、以下の手順に従ってください。

1. プロジェクトをクローンまたはダウンロードして、プロジェクトディレクトリに移動します。

   ```
   git clone https://github.com/MSK1206/planetscale-mysql-prisma-nextauth-nextjs-app
   ```

2. プロジェクトディレクトリで以下のコマンドを実行して、依存関係をインストールします。

   ```
   npm install
   ```

3. プロジェクトディレクトリで以下のコマンドを使用して、開発サーバーを起動します。

   ```
   npm run dev
   ```

4. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスして、プロジェクトを確認します。

<br />

## デプロイ

<h43>当リポジトリではデプロイ先をVercelを想定しています。
Vercelでのデプロイをする場合は

<div style="display: flex">
<p style="color: yellow">pakeage.json</p>
<p>または、Vercelの</p>
<p style="color: yellow">Build Command</p>
<p>の適宜変更が必要です。</p>
</div>

<br />

例：pakeage.json

```json
//　pakeage.jsonに追記する場合

{
  "name": "vercel-postgres-prisma-nextauth-nextjs-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && prisma db push && next build",
    "start": "next start",
    "lint": "next lint"
  },
  //...省略
```

例：Vercel Build Command

```
prisma generate && prisma db push && next build
```

![2023_232450_vercel com](https://github.com/MSK1206/planetscale-mysql-prisma-nextauth-nextjs-app/assets/86665622/4aeacdb1-8f4f-41a8-b9c0-b18b8fd24dd8)
