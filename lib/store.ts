import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { chainApi } from "./chainApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [chainApi.reducerPath]: chainApi.reducer,
    },
    middleware: (gDM) => gDM().concat(chainApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
