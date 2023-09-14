const express = require("express");
const app = express();
const { createBitcoinCronJob } = require("../../../cron.js");
const corsMiddleware = require("../../../corsMiddleware.js");
const Model = require("../../../Model/bitcoin/Models.jsx");
const bitcoinTxsHandler = require("../../../data/chainQueries/bitcoin/handlers.js");
require("dotenv").config();

const BITCOIN_API = process.env.BITCOIN_REST_API;

//cron task for Bitcoin
createBitcoinCronJob(BITCOIN_API, Model.bitcoinTxsModel);

// Define a helper function to prefix the routes with "/bitcoin"
function bitcoinRoute(path, handler) {
  return app.get(`/bitcoin${path}`, corsMiddleware, handler);
}

// Define the routes
bitcoinRoute("/txs", bitcoinTxsHandler(Model.bitcoinTxsModel));

module.exports = app;
