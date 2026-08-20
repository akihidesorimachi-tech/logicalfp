# LOGICAL FP 開発ガイド

## プロジェクトの目的

`logicalfp.pro` の親ポータルです。勤務医向けFP相談、ライフプランシミュレーター、コンサルタントポータルという3サービスへ導線を提供します。静的なReact + Viteサイトであり、バックエンド、認証、データベースは実装していません。

## 開発コマンド

| 目的 | コマンド |
| --- | --- |
| 依存関係の導入 | `npm install` |
| ローカル開発 | `npm run dev` |
| 型チェック | `npm run check` |
| 本番ビルド | `npm run build` |
| ビルド確認 | `npm run preview` |

## 編集方針

`src/pages/Home.tsx` がページの主実装です。サービスごとのURL・説明文・カード画像は、同ファイル冒頭の `services` 配列で一元管理してください。ロゴ・ヒーロー・各カード画像はすべて `public/assets/` に同梱され、コードから `/assets/...` の絶対パスで参照しています。

デザインは **Structured Clarity** を原則とします。深いネイビー `#0A1628`、ゴールド `#C9A84C`、オフホワイト `#F8F9FA` をブランド色とし、Noto Serif JP（見出し）、Noto Sans JP（本文）、Space Grotesk（英数字ラベル）を使用します。色や余白を変更する際は、スイス・タイポグラフィの情報階層と控えめな動きを維持してください。

## デプロイ上の注意

これは純粋な静的サイトです。`npm run build` で生成される `dist/` を、Vercel・Netlify・Cloudflare Pages・S3など任意の静的ホスティングへ配置できます。`logicalfp.pro` と `www.logicalfp.pro` のDNS設定・SSL設定・リダイレクト設定は、利用するホスティングの管理画面で行ってください。

## 維持すべきメタタグ

`index.html` にはFacebookドメイン認証用の次のメタタグが含まれています。Meta Business Suiteでのドメイン認証が完了するまでは削除しないでください。

```html
<meta name="facebook-domain-verification" content="9vgedfyl4emkfuulv9ilocrj6dxotc" />
```
