const cron = require("node-cron");
require("dotenv").config();
const fetchLatestBlocksAndTxs = require("./data/chainQueries/cosmos/latestBlocksAndTxs.js");
const fetchBitcoinTxs = require("./data/chainQueries/bitcoin/index.js");

//cron to run at every 3sec to get latest blocks
function createCronJob(apiUrl, txsModel, blockModel) {
  return cron.schedule("*/3 * * * * *", async () => {
    try {
      await fetchLatestBlocksAndTxs(apiUrl, txsModel, blockModel);
    } catch (error) {
      console.error("Error", error);
    }
  });
}

// bitcoin cron job
function createBitcoinCronJob(apiUrl, txsModel) {
  return cron.schedule("*/5 * * * * *", async () => {
    try {
      await fetchBitcoinTxs(apiUrl, txsModel);
    } catch (error) {
      console.error("Error", error);
    }
  });
}

module.exports = {
  createCronJob,
  createBitcoinCronJob,
};
