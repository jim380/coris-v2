const express = require("express");
const Model = require("../../../../../Model/cosmos-chains/Models.jsx");
const { createCronJob } = require("../../../../../cron.js");
const app = express();
require("dotenv").config();

const {
  allValidatorsHandler,
  activeValidatorsHandler,
  chainValidatorsDetailsHandler,
  chainInflationHandler,
  chainCommunityPoolHandler,
  chainPoolHandler,
  chainBlockHeightDetailsHandler,
  chainBlockHeightTxsHandler,
  chainTxsByHashHandler,
  chainValidatorsSlashingSigningInfosDetailsHandler,
  chainValidatorDelegationsHandler,
  chainValidatorUnDelegationsHandler,
  chainValidatorReDelegationsHandler,
  chainConsensusStateHandler,
  chainMintingParamsHandler,
  chainGovParamsHandler,
  chainSlashingParamsHandler,
  chainStakingParamsHandler,
  chainDistributionParamsHandler,
  chainNodeInfoHandler,
  chainProposalsHandler,
  chainProposalDetailsHandler,
  chainProposalVotingOptionsHandler,
  chainProposalTallyOptionsHandler,
  chainProposalDepositsHandler,
  chainAuthAccountHandler,
  chainAccountTxsByEventsHandler,
  chainAccountBalanceHandler,
  chainAccountDelegationRewardsHandler,
  chainAccountDelegationsHandler,
  chainAccountReDelegationsHandler,
  chainAccountUnDelegationsHandler,
  latestBlocksHandler,
  allTxsHandler,
} = require("../../../../../data/chainQueries/cosmos/handlers.js");

const corsMiddleware = require("../../../../../corsMiddleware.js");

const API = process.env.ASSETMANTLE_REST_API;
const RPC = process.env.ASSETMANTLE_RPC_API;

//cron task for assetmantle
createCronJob(API, Model.assetmantleTxsModel, Model.assetmantleBlockModel);

// Define a helper function to prefix the routes with "/assetmantle"
function assetmantleRoute(path, handler) {
  return app.get(`/assetmantle${path}`, corsMiddleware, handler);
}

// Define the routes
assetmantleRoute("/blocks/latest", latestBlocksHandler(Model.assetmantleBlockModel));
assetmantleRoute("/txs", allTxsHandler(Model.assetmantleTxsModel));
assetmantleRoute("/all_validators", allValidatorsHandler(API));
assetmantleRoute("/active_validators", activeValidatorsHandler(API));
assetmantleRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
assetmantleRoute("/chain_inflation", chainInflationHandler(API));
assetmantleRoute("/chain_community_pool", chainCommunityPoolHandler(API));
assetmantleRoute("/chain_pool", chainPoolHandler(API));
assetmantleRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
assetmantleRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
assetmantleRoute("/chain_txs_hash", chainTxsByHashHandler(API));
assetmantleRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
assetmantleRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
assetmantleRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
assetmantleRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
assetmantleRoute("/chain_consensus", chainConsensusStateHandler(RPC));
assetmantleRoute("/chain_minting_params", chainMintingParamsHandler(API));
assetmantleRoute("/chain_gov_params", chainGovParamsHandler(API));
assetmantleRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
assetmantleRoute("/chain_staking_params", chainStakingParamsHandler(API));
assetmantleRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
assetmantleRoute("/chain_node_info", chainNodeInfoHandler(API));
assetmantleRoute("/chain_proposals", chainProposalsHandler(API));
assetmantleRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
assetmantleRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
assetmantleRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
assetmantleRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
assetmantleRoute("/chain_auth_account", chainAuthAccountHandler(API));
assetmantleRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
assetmantleRoute("/chain_account_balance", chainAccountBalanceHandler(API));
assetmantleRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
assetmantleRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
assetmantleRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
assetmantleRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
