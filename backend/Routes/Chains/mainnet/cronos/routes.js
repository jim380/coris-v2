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

const API = process.env.CRONOS_REST_API;
const RPC = process.env.CRONOS_RPC_API;

//cron task for cronos
createCronJob(
  API,
  Model.cronosTxsModel,
  Model.cronosBlockModel
);

// Define a helper function to prefix the routes with "/cronos"
function cronosRoute(path, handler) {
  return app.get(`/cronos${path}`, corsMiddleware, handler);
}

// Define the routes
cronosRoute("/blocks/latest", latestBlocksHandler(Model.cronosBlockModel));
cronosRoute("/txs", allTxsHandler(Model.cronosTxsModel));
cronosRoute("/all_validators", allValidatorsHandler(API));
cronosRoute("/active_validators", activeValidatorsHandler(API));
cronosRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
cronosRoute("/chain_inflation", chainInflationHandler(API));
cronosRoute("/chain_community_pool", chainCommunityPoolHandler(API));
cronosRoute("/chain_pool", chainPoolHandler(API));
cronosRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
cronosRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
cronosRoute("/chain_txs_hash", chainTxsByHashHandler(API));
cronosRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
cronosRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
cronosRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
cronosRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
cronosRoute("/chain_consensus", chainConsensusStateHandler(RPC));
cronosRoute("/chain_minting_params", chainMintingParamsHandler(API));
cronosRoute("/chain_gov_params", chainGovParamsHandler(API));
cronosRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
cronosRoute("/chain_staking_params", chainStakingParamsHandler(API));
cronosRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
cronosRoute("/chain_node_info", chainNodeInfoHandler(API));
cronosRoute("/chain_proposals", chainProposalsHandler(API));
cronosRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
cronosRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
cronosRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
cronosRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
cronosRoute("/chain_auth_account", chainAuthAccountHandler(API));
cronosRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
cronosRoute("/chain_account_balance", chainAccountBalanceHandler(API));
cronosRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
cronosRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
cronosRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
cronosRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
