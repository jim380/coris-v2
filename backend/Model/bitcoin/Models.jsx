const mongoose = require("mongoose");

const TxsSchema = new mongoose.Schema({
    block_height: {
        type: Number,
        required: true,
        unique: false,
    },
    hash: {
    type: String,
    required: true,
    unique: true,
  },
   block_time: {
    type: String,
    required: true,
    unique: false,
  },
  fee : Number,
  is_double_spend : Boolean,
  outputs_count : Number,
  outputs_value : Number,
  inputs: [],
  outputs: [],
});

//set bitcoin chain schema
const bitcoinTransactions = mongoose.model("bitcoin-Transactions", TxsSchema);

module.exports = {
  bitcoinTxsModel: bitcoinTransactions,
};
