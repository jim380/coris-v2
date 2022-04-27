import { AppProps } from "next/app";
import Layout from "../components/Layout";
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

export function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}

export default wrapper.withRedux(App);
