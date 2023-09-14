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

const API = process.env.EVMOS_REST_API;
const RPC = process.env.EVMOS_RPC_API;

//cron task for evmos
createCronJob(API, Model.evmosTxsModel, Model.evmosBlockModel);

// Define a helper function to prefix the routes with "/evmos"
function evmosRoute(path, handler) {
  return app.get(`/evmos${path}`, corsMiddleware, handler);
}

// Define the routes
evmosRoute("/blocks/latest", latestBlocksHandler(Model.evmosBlockModel));
evmosRoute("/txs", allTxsHandler(Model.evmosTxsModel));
evmosRoute("/all_validators", allValidatorsHandler(API));
evmosRoute("/active_validators", activeValidatorsHandler(API));
evmosRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
evmosRoute("/chain_inflation", chainInflationHandler(API));
evmosRoute("/chain_community_pool", chainCommunityPoolHandler(API));
evmosRoute("/chain_pool", chainPoolHandler(API));
evmosRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
evmosRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
evmosRoute("/chain_txs_hash", chainTxsByHashHandler(API));
evmosRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
evmosRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
evmosRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
evmosRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
evmosRoute("/chain_consensus", chainConsensusStateHandler(RPC));
evmosRoute("/chain_minting_params", chainMintingParamsHandler(API));
evmosRoute("/chain_gov_params", chainGovParamsHandler(API));
evmosRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
evmosRoute("/chain_staking_params", chainStakingParamsHandler(API));
evmosRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
evmosRoute("/chain_node_info", chainNodeInfoHandler(API));
evmosRoute("/chain_proposals", chainProposalsHandler(API));
evmosRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
evmosRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
evmosRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
evmosRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
evmosRoute("/chain_auth_account", chainAuthAccountHandler(API));
evmosRoute("/chain_account_txs_by_events", chainAccountTxsByEventsHandler(API));
evmosRoute("/chain_account_balance", chainAccountBalanceHandler(API));
evmosRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
evmosRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
evmosRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
evmosRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
