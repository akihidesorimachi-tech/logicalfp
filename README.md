# LOGICAL FP Portal

`logicalfp.pro` の親ポータルサイトです。1級FP監修の3サービスへの入口として、勤務医向け無料FP相談、ライフプランシミュレーター、コンサルタントポータルを案内します。

## ローカル起動

Node.js 20以降を用意した上で、次のコマンドを実行してください。

```bash
npm install
npm run dev
```

表示されたURLをブラウザで開くとローカルプレビューを確認できます。本番成果物は `npm run build` で `dist/` に出力されます。

## 引き継ぎ内容

| 項目 | 内容 |
| --- | --- |
| フレームワーク | React 19 + Vite 7 + Tailwind CSS 4 |
| ページ実装 | `src/pages/Home.tsx` |
| グローバルスタイル | `src/index.css` |
| 画像アセット | `public/assets/` に5点をローカル同梱 |
| Facebook認証 | `index.html` に認証メタタグを設定済み |
| 外部リンク | doctor / simulator / consultant の各サブドメイン |

本パッケージは特定のホスティングサービスに依存しない構成です。詳細な編集・デプロイ方針は [`CLAUDE.md`](./CLAUDE.md) を参照してください。
