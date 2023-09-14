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

const API = process.env.AGORIC_REST_API;
const RPC = process.env.AGORIC_RPC_API;

//cron task for agoric
createCronJob(API, Model.agoricTxsModel, Model.agoricBlockModel);

// Define a helper function to prefix the routes with "/agoric"
function agoricRoute(path, handler) {
  return app.get(`/agoric${path}`, corsMiddleware, handler);
}

// Define the routes
agoricRoute("/blocks/latest", latestBlocksHandler(Model.agoricBlockModel));
agoricRoute("/txs", allTxsHandler(Model.agoricTxsModel));
agoricRoute("/all_validators", allValidatorsHandler(API));
agoricRoute("/active_validators", activeValidatorsHandler(API));
agoricRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
agoricRoute("/chain_inflation", chainInflationHandler(API));
agoricRoute("/chain_community_pool", chainCommunityPoolHandler(API));
agoricRoute("/chain_pool", chainPoolHandler(API));
agoricRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
agoricRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
agoricRoute("/chain_txs_hash", chainTxsByHashHandler(API));
agoricRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
agoricRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
agoricRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
agoricRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
agoricRoute("/chain_consensus", chainConsensusStateHandler(RPC));
agoricRoute("/chain_minting_params", chainMintingParamsHandler(API));
agoricRoute("/chain_gov_params", chainGovParamsHandler(API));
agoricRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
agoricRoute("/chain_staking_params", chainStakingParamsHandler(API));
agoricRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
agoricRoute("/chain_node_info", chainNodeInfoHandler(API));
agoricRoute("/chain_proposals", chainProposalsHandler(API));
agoricRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
agoricRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
agoricRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
agoricRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
agoricRoute("/chain_auth_account", chainAuthAccountHandler(API));
agoricRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
agoricRoute("/chain_account_balance", chainAccountBalanceHandler(API));
agoricRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
agoricRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
agoricRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
agoricRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
