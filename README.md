src/

├── app/ ← Redux store（store.js）や Provider 設定

├── features/ ← ドメインごとの Redux slice & ロジック
│ ├── movies/ ← 映画一覧・詳細
│ ├── favorites/ ← お気に入り
│ ├── watchlist/ ← 観たいリスト
│ └── auth/ ← ログイン関連

├── pages/ ← 各ページコンポーネント
│ ├── Movies.jsx
│ ├── MovieDetail.jsx
│ ├── Favorites.jsx
│ ├── Watchlist.jsx
│ ├── Login.jsx
│ └── NotFound.jsx

├── components/ ← 小さめの UI パーツ（Card, Button など）
│ ├── MovieCard.jsx
│ ├── MovieCard.module.css
│ ├── Button.jsx
│ └── Button.module.css

├── routes/ ← ルーティング設定 & ProtectedRoute
│ └── ProtectedRoute.jsx

├── utils/ ← API 呼び出しや共通関数
│ ├── api.js
│ └── formatDate.js

├── styles/ ← 全体用の共通 CSS（例: リセット CSS など）
│ └── global.css

└── index.js ← アプリエントリーポイント
