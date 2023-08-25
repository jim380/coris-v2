const fetch = require("node-fetch");
const endpoints = require("../endpoints.jsx");

const fetchLatestBlocksAndTxs = async (api, txModel, blockModel) => {
  try {
    let response = await fetch(api + endpoints.latestBlocks);
    if (!response.ok) throw new Error("unexpected response");

    const block = await response.json();

    // Get transactions data in each block
    const getTxs = await fetch(
      api + endpoints.chainBlockHeightTxs(block.block.header.height)
    );
    if (!getTxs.ok) throw new Error("unexpected response");

    const txData = await getTxs.json();
    const mapTxData = txData.tx_responses.map(async (tx) => {
      // Skip saving if transaction with the same hash already exists
      const existingTx = await txModel.findOne({ txHash: tx.txhash });
      if (existingTx) {
        return;
      }

      const transactionsData = new txModel({
        txHash: tx.txhash,
        messages: tx.tx.body.messages,
        memo: tx.tx.body.memo,
        result: tx.code,
        fee: tx.tx.auth_info.fee.amount,
        height: tx.height,
        time: tx.timestamp,
      });

      // Save the data
      await transactionsData.save();
    });

    // To ensure that the function waits for the save operations to complete before returning
    await Promise.all(mapTxData);

    const existingBlock = await blockModel.findOne({
      height: block.block.header.height,
    });

    if (!existingBlock) {
      // Save latest blocks
      const blockData = new blockModel({
        height: block.block.header.height,
        hash: block.block_id.hash,
        proposer: block.block.header.proposer_address,
        noTxs: block.block.data.txs.length,
        time: block.block.header.time,
        signatures: block.block.last_commit.signatures.map(
          (validatorDetails) => {
            return { validator_address: validatorDetails.validator_address };
          }
        ),
      });

      await blockData.save();
    }
  } catch (err) {
    console.error(err);
    // Handle errors here
  }
};

module.exports = fetchLatestBlocksAndTxs;
