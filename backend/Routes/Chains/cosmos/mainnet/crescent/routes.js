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

const API = process.env.CRESCENT_REST_API;
const RPC = process.env.CRESCENT_RPC_API;

// cron task for cresent
createCronJob(API, Model.crescentTxsModel, Model.crescentBlockModel);

// Define a helper function to prefix the routes with "/crescent"
function crescentRoute(path, handler) {
  return app.get(`/crescent${path}`, corsMiddleware, handler);
}

// Define the routes
crescentRoute("/blocks/latest", latestBlocksHandler(Model.crescentBlockModel));
crescentRoute("/txs", allTxsHandler(Model.crescentTxsModel));
crescentRoute("/all_validators", allValidatorsHandler(API));
crescentRoute("/active_validators", activeValidatorsHandler(API));
crescentRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
crescentRoute("/chain_inflation", chainInflationHandler(API));
crescentRoute("/chain_community_pool", chainCommunityPoolHandler(API));
crescentRoute("/chain_pool", chainPoolHandler(API));
crescentRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
crescentRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
crescentRoute("/chain_txs_hash", chainTxsByHashHandler(API));
crescentRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
crescentRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
crescentRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
crescentRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
crescentRoute("/chain_consensus", chainConsensusStateHandler(RPC));
crescentRoute("/chain_minting_params", chainMintingParamsHandler(API));
crescentRoute("/chain_gov_params", chainGovParamsHandler(API));
crescentRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
crescentRoute("/chain_staking_params", chainStakingParamsHandler(API));
crescentRoute(
  "/chain_distribution_params",
  chainDistributionParamsHandler(API)
);
crescentRoute("/chain_node_info", chainNodeInfoHandler(API));
crescentRoute("/chain_proposals", chainProposalsHandler(API));
crescentRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
crescentRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
crescentRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
crescentRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
crescentRoute("/chain_auth_account", chainAuthAccountHandler(API));
crescentRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
crescentRoute("/chain_account_balance", chainAccountBalanceHandler(API));
crescentRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
crescentRoute(
  "/chain_account_delegations",
  chainAccountDelegationsHandler(API)
);
crescentRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
crescentRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
