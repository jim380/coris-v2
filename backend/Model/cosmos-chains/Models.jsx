const mongoose = require("mongoose");

const BlockSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
    unique: true,
  },
  proposer: {
    type: String,
    required: true,
    unique: false,
  },
  noTxs: {
    type: Number,
    required: true,
    unique: false,
  },
  time: {
    type: String,
    required: true,
    unique: false,
  },
  signatures: [],
});

const TxsSchema = new mongoose.Schema({
  txHash: {
    type: String,
    required: true,
    unique: true,
  },
  messages: [],
  memo : String,
  result: {
    type: Number,
    required: true,
    unique: false,
  },
  raw_log: String,
  fee: [],
  height: {
    type: Number,
    required: true,
    unique: false,
  },
  time: {
    type: String,
    required: true,
    unique: false,
  },
});

function createBlockchainModels(chainName) {
  const BlockModel = mongoose.model(`${chainName}-Blocks`, BlockSchema);
  const TxsModel = mongoose.model(`${chainName}-Transactions`, TxsSchema);
  return { BlockModel, TxsModel };
}

module.exports = {
  createBlockchainModels,
};
