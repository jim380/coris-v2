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

const API = process.env.TENET_REST_API;
const RPC = process.env.TENET_RPC_API;

//cron task for tenet
createCronJob(
  API,
  Model.tenetTxsModel,
  Model.tenetBlockModel
);

// Define a helper function to prefix the routes with "/tenet"
function tenetRoute(path, handler) {
  return app.get(`/tenet${path}`, corsMiddleware, handler);
}

// Define the routes
tenetRoute("/blocks/latest", latestBlocksHandler(Model.tenetBlockModel));
tenetRoute("/txs", allTxsHandler(Model.tenetTxsModel));
tenetRoute("/all_validators", allValidatorsHandler(API));
tenetRoute("/active_validators", activeValidatorsHandler(API));
tenetRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
tenetRoute("/chain_inflation", chainInflationHandler(API));
tenetRoute("/chain_community_pool", chainCommunityPoolHandler(API));
tenetRoute("/chain_pool", chainPoolHandler(API));
tenetRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
tenetRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
tenetRoute("/chain_txs_hash", chainTxsByHashHandler(API));
tenetRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
tenetRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
tenetRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
tenetRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
tenetRoute("/chain_consensus", chainConsensusStateHandler(RPC));
tenetRoute("/chain_minting_params", chainMintingParamsHandler(API));
tenetRoute("/chain_gov_params", chainGovParamsHandler(API));
tenetRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
tenetRoute("/chain_staking_params", chainStakingParamsHandler(API));
tenetRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
tenetRoute("/chain_node_info", chainNodeInfoHandler(API));
tenetRoute("/chain_proposals", chainProposalsHandler(API));
tenetRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
tenetRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
tenetRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
tenetRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
tenetRoute("/chain_auth_account", chainAuthAccountHandler(API));
tenetRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
tenetRoute("/chain_account_balance", chainAccountBalanceHandler(API));
tenetRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
tenetRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
tenetRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
tenetRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;