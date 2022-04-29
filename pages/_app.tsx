import { NextPage } from "next";
import { AppProps } from "next/app";
import '../styles/global.css'
import { ReactElement, ReactNode } from "react";
const { default: AbortController } = require("abort-controller");
const { wrapper } = require("../lib/store");
const { default: fetch, Headers, Request, Response } = require("node-fetch");

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

//dynamic layout
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(App);
