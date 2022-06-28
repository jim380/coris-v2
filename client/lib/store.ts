import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { chainApi } from "./chainApi";
import generalReducer from "./features/generalSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      general: generalReducer,
      [chainApi.reducerPath]: chainApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chainApi.middleware)
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });


