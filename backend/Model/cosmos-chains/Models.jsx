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

//set lum chain schema
const lumBlocks = mongoose.model("lum-Blocks", BlockSchema);
const lumTransactions = mongoose.model("lum-Transactions", TxsSchema);

//set gravitybridge chain schema
const gravitybridgeBlocks = mongoose.model("gravitybridge-Blocks", BlockSchema);
const gravitybridgeTransactions = mongoose.model("gravitybridge-Transactions", TxsSchema);

//set passage chain schema
const passageBlocks = mongoose.model("passage-Blocks", BlockSchema);
const passageTransactions = mongoose.model("passage-Transactions", TxsSchema);

//set rizon chain schema
const rizonBlocks = mongoose.model("rizon-Blocks", BlockSchema);
const rizonTransactions = mongoose.model("rizon-Transactions", TxsSchema);

//set provenance chain schema
const provenanceBlocks = mongoose.model("provenance-Blocks", BlockSchema);
const provenanceTransactions = mongoose.model("provenance-Transactions", TxsSchema);

//set assetmantle chain schema
const assetmantleBlocks = mongoose.model("assetmantle-Blocks", BlockSchema);
const assetmantleTransactions = mongoose.model("assetmantle-Transactions", TxsSchema);

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

  provenanceBlockModel: provenanceBlocks,
  provenanceTxsModel: provenanceTransactions,

  rizonBlockModel: rizonBlocks,
  rizonTxsModel: rizonTransactions,

  lumBlockModel: lumBlocks,
  lumTxsModel: lumTransactions,

  gravitybridgeBlockModel: gravitybridgeBlocks,
  gravitybridgeTxsModel: gravitybridgeTransactions,

  passageBlockModel: passageBlocks,
  passageTxsModel: passageTransactions,

  assetmantleBlockModel: assetmantleBlocks,
  assetmantleTxsModel: assetmantleTransactions,
};
