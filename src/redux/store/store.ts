import { configureStore, Store } from "@reduxjs/toolkit";
import themeModeReducer from "../slices/theme-mode/theme-mode-slice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
