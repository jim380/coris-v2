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

const API = process.env.REGEN_REST_API;
const RPC = process.env.REGEN_RPC_API;

//cron task for regen
createCronJob(API, Model.regenTxsModel, Model.regenBlockModel);

// Define a helper function to prefix the routes with "/regen"
function regenRoute(path, handler) {
  return app.get(`/regen${path}`, corsMiddleware, handler);
}

// Define the routes
regenRoute("/blocks/latest", latestBlocksHandler(Model.regenBlockModel));
regenRoute("/txs", allTxsHandler(Model.regenTxsModel));
regenRoute("/all_validators", allValidatorsHandler(API));
regenRoute("/active_validators", activeValidatorsHandler(API));
regenRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
regenRoute("/chain_inflation", chainInflationHandler(API));
regenRoute("/chain_community_pool", chainCommunityPoolHandler(API));
regenRoute("/chain_pool", chainPoolHandler(API));
regenRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
regenRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
regenRoute("/chain_txs_hash", chainTxsByHashHandler(API));
regenRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
regenRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
regenRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
regenRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
regenRoute("/chain_consensus", chainConsensusStateHandler(RPC));
regenRoute("/chain_minting_params", chainMintingParamsHandler(API));
regenRoute("/chain_gov_params", chainGovParamsHandler(API));
regenRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
regenRoute("/chain_staking_params", chainStakingParamsHandler(API));
regenRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
regenRoute("/chain_node_info", chainNodeInfoHandler(API));
regenRoute("/chain_proposals", chainProposalsHandler(API));
regenRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
regenRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
regenRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
regenRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
regenRoute("/chain_auth_account", chainAuthAccountHandler(API));
regenRoute("/chain_account_txs_by_events", chainAccountTxsByEventsHandler(API));
regenRoute("/chain_account_balance", chainAccountBalanceHandler(API));
regenRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
regenRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
regenRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
regenRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
