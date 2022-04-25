const { default: AbortController } = require("abort-controller");
//import "../styles/global.css";
const { wrapper } = require("../lib/store");
const { default: fetch, Headers, Request, Response } = require("node-fetch");

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

export function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
