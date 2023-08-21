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

const API = process.env.BAND_REST_API;
const RPC = process.env.BAND_RPC_API;

//cron task for band
createCronJob(
  API,
  Model.bandTxsModel,
  Model.bandBlockModel
);

// Define a helper function to prefix the routes with "/band"
function bandRoute(path, handler) {
  return app.get(`/band${path}`, corsMiddleware, handler);
}

// Define the routes
bandRoute("/blocks/latest", latestBlocksHandler(Model.bandBlockModel));
bandRoute("/txs", allTxsHandler(Model.bandTxsModel));
bandRoute("/all_validators", allValidatorsHandler(API));
bandRoute("/active_validators", activeValidatorsHandler(API));
bandRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
bandRoute("/chain_inflation", chainInflationHandler(API));
bandRoute("/chain_community_pool", chainCommunityPoolHandler(API));
bandRoute("/chain_pool", chainPoolHandler(API));
bandRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
bandRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
bandRoute("/chain_txs_hash", chainTxsByHashHandler(API));
bandRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
bandRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
bandRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
bandRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
bandRoute("/chain_consensus", chainConsensusStateHandler(RPC));
bandRoute("/chain_minting_params", chainMintingParamsHandler(API));
bandRoute("/chain_gov_params", chainGovParamsHandler(API));
bandRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
bandRoute("/chain_staking_params", chainStakingParamsHandler(API));
bandRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
bandRoute("/chain_node_info", chainNodeInfoHandler(API));
bandRoute("/chain_proposals", chainProposalsHandler(API));
bandRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
bandRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
bandRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
bandRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
bandRoute("/chain_auth_account", chainAuthAccountHandler(API));
bandRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
bandRoute("/chain_account_balance", chainAccountBalanceHandler(API));
bandRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
bandRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
bandRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
bandRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;