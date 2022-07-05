import { NextPage } from "next";
import { AppProps } from "next/app";
import '../styles/global.css'
import { ReactElement, ReactNode } from "react";
const { default: AbortController } = require("abort-controller");
const { default: fetch, Headers, Request, Response } = require("node-fetch");
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { wrapper } from "../lib/store";

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
    return getLayout(
      <SSRProvider>
        <Component {...pageProps} />
    </SSRProvider>
    );
   
}

export default wrapper.withRedux(App);

