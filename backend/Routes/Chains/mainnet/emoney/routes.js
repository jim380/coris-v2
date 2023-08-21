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

const API = process.env.CRYPTO_REST_API;
const RPC = process.env.CRYPTO_RPC_API;

//cron task for emoney
createCronJob(
  API,
  Model.emoneyTxsModel,
  Model.emoneyBlockModel
);

// Define a helper function to prefix the routes with "/emoney"
function emoneyRoute(path, handler) {
  return app.get(`/emoney${path}`, corsMiddleware, handler);
}

// Define the routes
emoneyRoute("/blocks/latest", latestBlocksHandler(Model.emoneyBlockModel));
emoneyRoute("/txs", allTxsHandler(Model.emoneyTxsModel));
emoneyRoute("/all_validators", allValidatorsHandler(API));
emoneyRoute("/active_validators", activeValidatorsHandler(API));
emoneyRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
emoneyRoute("/chain_inflation", chainInflationHandler(API));
emoneyRoute("/chain_community_pool", chainCommunityPoolHandler(API));
emoneyRoute("/chain_pool", chainPoolHandler(API));
emoneyRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
emoneyRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
emoneyRoute("/chain_txs_hash", chainTxsByHashHandler(API));
emoneyRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
emoneyRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
emoneyRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
emoneyRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
emoneyRoute("/chain_consensus", chainConsensusStateHandler(RPC));
emoneyRoute("/chain_minting_params", chainMintingParamsHandler(API));
emoneyRoute("/chain_gov_params", chainGovParamsHandler(API));
emoneyRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
emoneyRoute("/chain_staking_params", chainStakingParamsHandler(API));
emoneyRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
emoneyRoute("/chain_node_info", chainNodeInfoHandler(API));
emoneyRoute("/chain_proposals", chainProposalsHandler(API));
emoneyRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
emoneyRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
emoneyRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
emoneyRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
emoneyRoute("/chain_auth_account", chainAuthAccountHandler(API));
emoneyRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
emoneyRoute("/chain_account_balance", chainAccountBalanceHandler(API));
emoneyRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
emoneyRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
emoneyRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
emoneyRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;