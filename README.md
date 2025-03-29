# 🏦 Redux × 銀行モデルメモ

| Redux用語          | 銀行モデルの例え                                   |
|---------------------|----------------------------------------------------|
| `store`             | 銀行全体                                           |
| `slice`             | 各窓口（口座種別）                                 |
| `reducer`           | 窓口用マニュアル（どう処理するか）                |
| `dispatch`          | 申請書（出金・入金などのリクエスト）              |
| `state`             | 現在の口座状況（全口座の残高）                    |
| `action`            | 何円 or 何をどうしたいか（具体的な要望）         |
| `selector`          | 通帳記帳（現在の状態を読み出す）                  |
| `persistReducer`    | 銀行が潰れても金が残る仕組み（保存対応の窓口）   |
| `persistConfig`     | 保存マニュアル：保存対象の窓口指定（保存先は1つ）|
| `combineReducers`   | 窓口の集約：1つのreducerにまとめる必要がある     |

### 🔍 combineReducers の補足

- `persistReducer()` は1つの reducer しか受け取れない  
- `configureStore()` も `reducer` にオブジェクト1つしか渡せない  
→ だから **slice を combineReducers() でまとめておく必要がある**
