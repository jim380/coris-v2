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

//set umee chain schema
const umeeBlocks = mongoose.model("umee-Blocks", BlockSchema);
const umeeTransactions = mongoose.model("umee-Transactions", TxsSchema);

//set cosmos chain schema
const cosmosBlocks = mongoose.model("cosmos-Blocks", BlockSchema);
const cosmosTransactions = mongoose.model("cosmos-Transactions", TxsSchema);

//set agoric chain schema
const agoricBlocks = mongoose.model("agoric-Blocks", BlockSchema);
const agoricTransactions = mongoose.model("agoric-Transactions", TxsSchema);

//set akash chain schema
const akashBlocks = mongoose.model("akash-Blocks", BlockSchema);
const akashTransactions = mongoose.model("akash-Transactions", TxsSchema);

//set crescent chain schema
const crescentBlocks = mongoose.model("crescent-Blocks", BlockSchema);
const crescentTransactions = mongoose.model("crescent-Transactions", TxsSchema);

//set chihuahua chain schema
const chihuahuaBlocks = mongoose.model("chihuahua-Blocks", BlockSchema);
const chihuahuaTransactions = mongoose.model("chihuahua-Transactions", TxsSchema);

//set juno chain schema
const junoBlocks = mongoose.model("juno-Blocks", BlockSchema);
const junoTransactions = mongoose.model("juno-Transactions", TxsSchema);

//set stargaze chain schema
const stargazeBlocks = mongoose.model("stargaze-Blocks", BlockSchema);
const stargazeTransactions = mongoose.model("stargaze-Transactions", TxsSchema);

//set neutron chain schema
const neutronBlocks = mongoose.model("neutron-Blocks", BlockSchema);
const neutronTransactions = mongoose.model("neutron-Transactions", TxsSchema);

//set stride chain schema
const strideBlocks = mongoose.model("stride-Blocks", BlockSchema);
const strideTransactions = mongoose.model("stride-Transactions", TxsSchema);

//set evmos chain schema
const evmosBlocks = mongoose.model("evmos-Blocks", BlockSchema);
const evmosTransactions = mongoose.model("evmos-Transactions", TxsSchema);

//set osmosis chain schema
const osmosisBlocks = mongoose.model("osmosis-Blocks", BlockSchema);
const osmosisTransactions = mongoose.model("osmosis-Transactions", TxsSchema);

//set skale chain schema
const skaleBlocks = mongoose.model("skale-Blocks", BlockSchema);
const skaleTransactions = mongoose.model("skale-Transactions", TxsSchema);

//set celo chain schema
const celoBlocks = mongoose.model("celo-Blocks", BlockSchema);
const celoTransactions = mongoose.model("celo-Transactions", TxsSchema);

//set sifchain chain schema
const sifchainBlocks = mongoose.model("sifchain-Blocks", BlockSchema);
const sifchainTransactions = mongoose.model("sifchain-Transactions", TxsSchema);

//set regen chain schema
const regenBlocks = mongoose.model("regen-Blocks", BlockSchema);
const regenTransactions = mongoose.model("regen-Transactions", TxsSchema);

//set irisnet chain schema
const irisnetBlocks = mongoose.model("irisnet-Blocks", BlockSchema);
const irisnetTransactions = mongoose.model("irisnet-Transactions", TxsSchema);

//set band chain schema
const bandBlocks = mongoose.model("band-Blocks", BlockSchema);
const bandTransactions = mongoose.model("band-Transactions", TxsSchema);

//set beezee chain schema
const beezeeBlocks = mongoose.model("beezee-Blocks", BlockSchema);
const beezeeTransactions = mongoose.model("beezee-Transactions", TxsSchema);

//set canto chain schema
const cantoBlocks = mongoose.model("canto-Blocks", BlockSchema);
const cantoTransactions = mongoose.model("canto-Transactions", TxsSchema);

//set cronos chain schema
const cronosBlocks = mongoose.model("cronos-Blocks", BlockSchema);
const cronosTransactions = mongoose.model("cronos-Transactions", TxsSchema);

//set desmos chain schema
const desmosBlocks = mongoose.model("desmos-Blocks", BlockSchema);
const desmosTransactions = mongoose.model("desmos-Transactions", TxsSchema);

//set meme chain schema
const memeBlocks = mongoose.model("meme-Blocks", BlockSchema);
const memeTransactions = mongoose.model("meme-Transactions", TxsSchema);

//set mun chain schema
const munBlocks = mongoose.model("mun-Blocks", BlockSchema);
const munTransactions = mongoose.model("mun-Transactions", TxsSchema);

//set tenet chain schema
const tenetBlocks = mongoose.model("tenet-Blocks", BlockSchema);
const tenetTransactions = mongoose.model("tenet-Transactions", TxsSchema);

//set crypto chain schema
const cryptoBlocks = mongoose.model("crypto-Blocks", BlockSchema);
const cryptoTransactions = mongoose.model("crypto-Transactions", TxsSchema);

//set emoney chain schema
const emoneyBlocks = mongoose.model("emoney-Blocks", BlockSchema);
const emoneyTransactions = mongoose.model("emoney-Transactions", TxsSchema);

module.exports = {
  umeeBlockModel: umeeBlocks,
  umeeTxsModel: umeeTransactions,
  
  cosmosBlockModel: cosmosBlocks,
  cosmosTxsModel: cosmosTransactions,
  
  agoricBlockModel: agoricBlocks,
  agoricTxsModel: agoricTransactions,

  akashBlockModel: akashBlocks,
  akashTxsModel: akashTransactions,

  crescentBlockModel: crescentBlocks,
  crescentTxsModel: crescentTransactions,

  chihuahuaBlockModel: chihuahuaBlocks,
  chihuahuaTxsModel: chihuahuaTransactions,

  junoBlockModel: junoBlocks,
  junoTxsModel: junoTransactions,

  stargazeBlockModel: stargazeBlocks,
  stargazeTxsModel: stargazeTransactions,
  
  neutronBlockModel: neutronBlocks,
  neutronTxsModel: neutronTransactions,

  strideBlockModel: strideBlocks,
  strideTxsModel: strideTransactions,

  evmosBlockModel: evmosBlocks,
  evmosTxsModel: evmosTransactions,

  osmosisBlockModel: osmosisBlocks,
  osmosisTxsModel: osmosisTransactions,

  skaleBlockModel: skaleBlocks,
  skaleTxsModel: skaleTransactions,

  celoBlockModel: celoBlocks,
  celoTxsModel: celoTransactions,

  sifchainBlockModel: sifchainBlocks,
  sifchainTxsModel: sifchainTransactions,

  regenBlockModel: regenBlocks,
  regenTxsModel: regenTransactions,

  irisnetBlockModel: irisnetBlocks,
  irisnetTxsModel: irisnetTransactions,

  bandBlockModel: bandBlocks,
  bandTxsModel: bandTransactions,

  beezeeBlockModel: beezeeBlocks,
  beezeeTxsModel: beezeeTransactions,

  cantoBlockModel: cantoBlocks,
  cantoTxsModel: cantoTransactions,

  cronosBlockModel: cronosBlocks,
  cronosTxsModel: cronosTransactions,

  desmosBlockModel: desmosBlocks,
  desmosTxsModel: desmosTransactions,

  memeBlockModel: memeBlocks,
  memeTxsModel: memeTransactions,

  munBlockModel: munBlocks,
  munTxsModel: munTransactions,

  tenetBlockModel: tenetBlocks,
  tenetTxsModel: tenetTransactions,

  cryptoBlockModel: cryptoBlocks,
  cryptoTxsModel: cryptoTransactions,

  emoneyBlockModel: emoneyBlocks,
  emoneyTxsModel: emoneyTransactions,
};
