import { chainURL } from "./Util/chainsURL";

export const BaseChainApi = (chain_id) => {
  let getApi = chainURL.COSMOS_API;
  if (chain_id === "cosmos") {
    getApi = chainURL.COSMOS_API;
  } else if (chain_id === "agoric") {
    getApi = chainURL.AGORIC_API;
  } else if (chain_id === "akash-network") {
    getApi = chainURL.AKASH_API;
  } else if (chain_id === "chihuahua") {
    getApi = chainURL.CHIHUAHUA_API;
  } else if (chain_id === "crescent-network") {
    getApi = chainURL.CRESCENT_API;
  } else if (chain_id === "juno-network") {
    getApi = chainURL.JUNO_API;
  } else if (chain_id === "stargaze") {
    getApi = chainURL.STARGAZE_API;
  } else if (chain_id === "osmosis") {
    getApi = chainURL.OSMOSIS_API;
  } else if (chain_id === "tenet") {
    getApi = chainURL.TENET_API;
  } else if (chain_id === "desmos") {
    getApi = chainURL.DESMOS_API;
  } else if (chain_id === "mun") {
    getApi = chainURL.MUN_API;
  } else if (chain_id === "irisnet") {
    getApi = chainURL.IRISNET_API;
  } else if (chain_id === "regen") {
    getApi = chainURL.REGEN_API;
  } else if (chain_id === "celo") {
    getApi = chainURL.CELO_API;
  } else if (chain_id === "skale") {
    getApi = chainURL.SKALE_API;
  } else if (chain_id === "sifchain") {
    getApi = chainURL.SIFCHAIN_API;
  } else if (chain_id === "evmos") {
    getApi = chainURL.EVMOS_API;
  }
  return getApi;
};
