import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import sessionStorage from "redux-persist/lib/storage/session"; // sessionStorage
import moviesReducer from "../features/movies/moviesSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import { combineReducers } from "redux";

// sliceごとのpersist設定
const favoritesPersistConfig = {
  key: "favorites",
  storage, // localStorage
};

// 必要に応じて将来追加可能（例: authなど）
// const authPersistConfig = {
//   key: 'auth',
//   storage: sessionStorage, // sessionStorage
// };

const rootReducer = combineReducers({
  movies: moviesReducer, // 保存なし
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer), // 保存あり
  // auth: persistReducer(authPersistConfig, authReducer), // ← 将来的に追加できる
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
