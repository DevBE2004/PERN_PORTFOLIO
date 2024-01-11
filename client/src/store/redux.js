import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import menuSlice from "./Menu/menuSlice";

const commonConfig = {
  storage,
};

const menuConfig = {
  ...commonConfig,
  key: "portfolio/menu",
  whitelist: ["isShowMenu", "menuLeft"],
};

export const store = configureStore({
  reducer: { menu: persistReducer(menuConfig, menuSlice) },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store, null);
