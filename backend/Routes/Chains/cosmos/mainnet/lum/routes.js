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

const API = process.env.LUM_REST_API;
const RPC = process.env.LUM_RPC_API;

//cron task for lum
createCronJob(API, Model.lumTxsModel, Model.lumBlockModel);

// Define a helper function to prefix the routes with "/lum"
function lumRoute(path, handler) {
  return app.get(`/lum${path}`, corsMiddleware, handler);
}

// Define the routes
lumRoute("/blocks/latest", latestBlocksHandler(Model.lumBlockModel));
lumRoute("/txs", allTxsHandler(Model.lumTxsModel));
lumRoute("/all_validators", allValidatorsHandler(API));
lumRoute("/active_validators", activeValidatorsHandler(API));
lumRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
lumRoute("/chain_inflation", chainInflationHandler(API));
lumRoute("/chain_community_pool", chainCommunityPoolHandler(API));
lumRoute("/chain_pool", chainPoolHandler(API));
lumRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
lumRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
lumRoute("/chain_txs_hash", chainTxsByHashHandler(API));
lumRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
lumRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
lumRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
lumRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
lumRoute("/chain_consensus", chainConsensusStateHandler(RPC));
lumRoute("/chain_minting_params", chainMintingParamsHandler(API));
lumRoute("/chain_gov_params", chainGovParamsHandler(API));
lumRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
lumRoute("/chain_staking_params", chainStakingParamsHandler(API));
lumRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
lumRoute("/chain_node_info", chainNodeInfoHandler(API));
lumRoute("/chain_proposals", chainProposalsHandler(API));
lumRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
lumRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
lumRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
lumRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
lumRoute("/chain_auth_account", chainAuthAccountHandler(API));
lumRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
lumRoute("/chain_account_balance", chainAccountBalanceHandler(API));
lumRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
lumRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
lumRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
lumRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;