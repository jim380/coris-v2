const express = require("express");
const mongoose = require("mongoose");

const umeeRouter = require("./Routes/Chains/cosmos/mainnet/umee/routes");
const cosmosRouter = require("./Routes/Chains/cosmos/mainnet/cosmosHub/routes");
const agoricRouter = require("./Routes/Chains/cosmos/mainnet/agoric/routes");
const akashRouter = require("./Routes/Chains/cosmos/mainnet/akash/routes");
const chihuahuaRouter = require("./Routes/Chains/cosmos/mainnet/chihuahua/routes");
const crescentRouter = require("./Routes/Chains/cosmos/mainnet/crescent/routes");
const junoRouter = require("./Routes/Chains/cosmos/mainnet/juno/routes");
const neutronRouter = require("./Routes/Chains/cosmos/mainnet/neutron/routes");
const stargazeRouter = require("./Routes/Chains/cosmos/mainnet/stargaze/routes");
const strideRouter = require("./Routes/Chains/cosmos/mainnet/stride/routes");
const celoRouter = require("./Routes/Chains/cosmos/mainnet/celo/routes");
const evmosRouter = require("./Routes/Chains/cosmos/mainnet/evmos/routes");
const irisnetRouter = require("./Routes/Chains/cosmos/mainnet/irisnet/routes");
const osmosisRouter = require("./Routes/Chains/cosmos/mainnet/osmosis/routes");
const regenRouter = require("./Routes/Chains/cosmos/mainnet/regen/routes");
const sifchainRouter = require("./Routes/Chains/cosmos/mainnet/sifchain/routes");
const skaleRouter = require("./Routes/Chains/cosmos/mainnet/skale/routes");
const tenetRouter = require("./Routes/Chains/cosmos/mainnet/tenet/routes");
const bandRouter = require("./Routes/Chains/cosmos/mainnet/band/routes");
const beezeeRouter = require("./Routes/Chains/cosmos/mainnet/beezee/routes");
const cantoRouter = require("./Routes/Chains/cosmos/mainnet/canto/routes");
const cronosRouter = require("./Routes/Chains/cosmos/mainnet/cronos/routes");
const desmosRouter = require("./Routes/Chains/cosmos/mainnet/desmos/routes");
const memeRouter = require("./Routes/Chains/cosmos/mainnet/meme/routes");
const munRouter = require("./Routes/Chains/cosmos/mainnet/mun/routes");
const cryptoRouter = require("./Routes/Chains/cosmos/mainnet/crypto/routes");
const emoneyRouter = require("./Routes/Chains/cosmos/mainnet/emoney/routes");

const bitcoinRouter = require("./Routes/Chains/bitcoin/routes");

require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(umeeRouter);
app.use(cosmosRouter);
app.use(agoricRouter);
app.use(akashRouter);
app.use(chihuahuaRouter);
app.use(crescentRouter);
app.use(junoRouter);
app.use(neutronRouter);
app.use(stargazeRouter);
app.use(strideRouter);
app.use(celoRouter);
app.use(evmosRouter);
app.use(irisnetRouter);
app.use(osmosisRouter);
app.use(regenRouter);
app.use(sifchainRouter);
app.use(skaleRouter);
app.use(tenetRouter);
app.use(bandRouter);
app.use(beezeeRouter);
app.use(cantoRouter);
app.use(cronosRouter);
app.use(desmosRouter);
app.use(memeRouter);
app.use(munRouter);
app.use(cryptoRouter);
app.use(emoneyRouter);

app.use(bitcoinRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
