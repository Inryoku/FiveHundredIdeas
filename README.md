store             = 銀行全体
slice             = 各窓口（口座種別）
reducer           = 窓口用マニュアル（どう処理するか）
dispatch          = 申請書（出金・入金などのリクエスト）
state             = 現在の口座状況（全口座の残高）
action            = 何円 or 何をどうしたいか（具体的な要望）
selector          = 通帳記帳（現在の状態を読み出す）

persistReducer    = 銀行が潰れても金が残る仕組み（保存対応の窓口にする）
persistConfig     = 保存マニュアル（どの窓口を保存するか指定。保存先は1つだけ）

combineReducers   = 窓口の集約（複数のreducerを1オブジェクトにまとめる）
                  → なぜ必要？
                  - persistReducerは1つのreducerしか受け取れない
                  - configureStoreもreducerを1オブジェクトで受け取る
                  → 結局なんやかんや combineReducers が必要になる
