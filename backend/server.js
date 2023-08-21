const express = require("express");
const mongoose = require("mongoose");

const umeeRouter = require("./Routes/Chains/mainnet/umee/routes");
const cosmosRouter = require("./Routes/Chains/mainnet/cosmos/routes");
const agoricRouter = require("./Routes/Chains/mainnet/agoric/routes");
const akashRouter = require("./Routes/Chains/mainnet/akash/routes");
const chihuahuaRouter = require("./Routes/Chains/mainnet/chihuahua/routes");
const crescentRouter = require("./Routes/Chains/mainnet/crescent/routes");
const junoRouter = require("./Routes/Chains/mainnet/juno/routes");
const neutronRouter = require("./Routes/Chains/mainnet/neutron/routes");
const stargazeRouter = require("./Routes/Chains/mainnet/stargaze/routes");
const strideRouter = require("./Routes/Chains/mainnet/stride/routes");
const celoRouter = require("./Routes/Chains/mainnet/celo/routes");
const evmosRouter = require("./Routes/Chains/mainnet/evmos/routes");
const irisnetRouter = require("./Routes/Chains/mainnet/irisnet/routes");
const osmosisRouter = require("./Routes/Chains/mainnet/osmosis/routes");
const regenRouter = require("./Routes/Chains/mainnet/regen/routes");
const sifchainRouter = require("./Routes/Chains/mainnet/sifchain/routes");
const skaleRouter = require("./Routes/Chains/mainnet/skale/routes");
const tenetRouter = require("./Routes/Chains/mainnet/tenet/routes");
const bandRouter = require("./Routes/Chains/mainnet/band/routes");
const beezeeRouter = require("./Routes/Chains/mainnet/beezee/routes");
const cantoRouter = require("./Routes/Chains/mainnet/canto/routes");
const cronosRouter = require("./Routes/Chains/mainnet/cronos/routes");
const desmosRouter = require("./Routes/Chains/mainnet/desmos/routes");
const memeRouter = require("./Routes/Chains/mainnet/meme/routes");
const munRouter = require("./Routes/Chains/mainnet/mun/routes");
const cryptoRouter = require("./Routes/Chains/mainnet/crypto/routes");
const  emoneyRouter = require("./Routes/Chains/mainnet/emoney/routes");
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

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
