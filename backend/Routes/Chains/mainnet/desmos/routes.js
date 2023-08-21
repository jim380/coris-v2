const express = require("express");
const Model = require("../../../../Model/Models.jsx");
const createCronJob = require("../../../../cron.js");
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
} = require("../../../../data/handlers.js");
const corsMiddleware = require("../../../../corsMiddleware.js");

const API = process.env.DESMOS_REST_API;
const RPC = process.env.DESMOS_RPC_API;

//cron task for desmos
createCronJob(
  API,
  Model.desmosTxsModel,
  Model.desmosBlockModel
);

// Define a helper function to prefix the routes with "/desmos"
function desmosRoute(path, handler) {
  return app.get(`/desmos${path}`, corsMiddleware, handler);
}

// Define the routes
desmosRoute("/blocks/latest", latestBlocksHandler(Model.desmosBlockModel));
desmosRoute("/txs", allTxsHandler(Model.desmosTxsModel));
desmosRoute("/all_validators", allValidatorsHandler(API));
desmosRoute("/active_validators", activeValidatorsHandler(API));
desmosRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
desmosRoute("/chain_inflation", chainInflationHandler(API));
desmosRoute("/chain_community_pool", chainCommunityPoolHandler(API));
desmosRoute("/chain_pool", chainPoolHandler(API));
desmosRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
desmosRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
desmosRoute("/chain_txs_hash", chainTxsByHashHandler(API));
desmosRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
desmosRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
desmosRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
desmosRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
desmosRoute("/chain_consensus", chainConsensusStateHandler(RPC));
desmosRoute("/chain_minting_params", chainMintingParamsHandler(API));
desmosRoute("/chain_gov_params", chainGovParamsHandler(API));
desmosRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
desmosRoute("/chain_staking_params", chainStakingParamsHandler(API));
desmosRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
desmosRoute("/chain_node_info", chainNodeInfoHandler(API));
desmosRoute("/chain_proposals", chainProposalsHandler(API));
desmosRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
desmosRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
desmosRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
desmosRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
desmosRoute("/chain_auth_account", chainAuthAccountHandler(API));
desmosRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
desmosRoute("/chain_account_balance", chainAccountBalanceHandler(API));
desmosRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
desmosRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
desmosRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
desmosRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
