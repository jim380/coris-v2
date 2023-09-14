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

const API = process.env.AKASH_REST_API;
const RPC = process.env.AKASH_RPC_API;

//cron task for akash
createCronJob(API, Model.akashTxsModel, Model.akashBlockModel);

// Define a helper function to prefix the routes with "/akash"
function akashRoute(path, handler) {
  return app.get(`/akash${path}`, corsMiddleware, handler);
}

// Define the routes
akashRoute("/blocks/latest", latestBlocksHandler(Model.akashBlockModel));
akashRoute("/txs", allTxsHandler(Model.akashTxsModel));
akashRoute("/all_validators", allValidatorsHandler(API));
akashRoute("/active_validators", activeValidatorsHandler(API));
akashRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
akashRoute("/chain_inflation", chainInflationHandler(API));
akashRoute("/chain_community_pool", chainCommunityPoolHandler(API));
akashRoute("/chain_pool", chainPoolHandler(API));
akashRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
akashRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
akashRoute("/chain_txs_hash", chainTxsByHashHandler(API));
akashRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
akashRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
akashRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
akashRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
akashRoute("/chain_consensus", chainConsensusStateHandler(RPC));
akashRoute("/chain_minting_params", chainMintingParamsHandler(API));
akashRoute("/chain_gov_params", chainGovParamsHandler(API));
akashRoute(
  "/chain_slashing_params",
  corsMiddleware,
  chainSlashingParamsHandler(API)
);
akashRoute("/chain_staking_params", chainStakingParamsHandler(API));
akashRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
akashRoute("/chain_node_info", chainNodeInfoHandler(API));
akashRoute("/chain_proposals", chainProposalsHandler(API));
akashRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
akashRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
akashRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
akashRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
akashRoute("/chain_auth_account", chainAuthAccountHandler(API));
akashRoute("/chain_account_txs_by_events", chainAccountTxsByEventsHandler(API));
akashRoute("/chain_account_balance", chainAccountBalanceHandler(API));
akashRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
akashRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
akashRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
akashRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
