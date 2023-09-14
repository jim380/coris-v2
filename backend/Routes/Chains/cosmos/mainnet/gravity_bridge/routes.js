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

const API = process.env.GRAVITYBRIDGE_REST_API;
const RPC = process.env.GRAVITYBRIDGE_RPC_API;

//cron task for gravitybridge
createCronJob(API, Model.gravitybridgeTxsModel, Model.gravitybridgeBlockModel);

// Define a helper function to prefix the routes with "/gravitybridge"
function gravitybridgeRoute(path, handler) {
  return app.get(`/gravitybridge${path}`, corsMiddleware, handler);
}

// Define the routes
gravitybridgeRoute("/blocks/latest", latestBlocksHandler(Model.gravitybridgeBlockModel));
gravitybridgeRoute("/txs", allTxsHandler(Model.gravitybridgeTxsModel));
gravitybridgeRoute("/all_validators", allValidatorsHandler(API));
gravitybridgeRoute("/active_validators", activeValidatorsHandler(API));
gravitybridgeRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
gravitybridgeRoute("/chain_inflation", chainInflationHandler(API));
gravitybridgeRoute("/chain_community_pool", chainCommunityPoolHandler(API));
gravitybridgeRoute("/chain_pool", chainPoolHandler(API));
gravitybridgeRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
gravitybridgeRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
gravitybridgeRoute("/chain_txs_hash", chainTxsByHashHandler(API));
gravitybridgeRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
gravitybridgeRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
gravitybridgeRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
gravitybridgeRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
gravitybridgeRoute("/chain_consensus", chainConsensusStateHandler(RPC));
gravitybridgeRoute("/chain_minting_params", chainMintingParamsHandler(API));
gravitybridgeRoute("/chain_gov_params", chainGovParamsHandler(API));
gravitybridgeRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
gravitybridgeRoute("/chain_staking_params", chainStakingParamsHandler(API));
gravitybridgeRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
gravitybridgeRoute("/chain_node_info", chainNodeInfoHandler(API));
gravitybridgeRoute("/chain_proposals", chainProposalsHandler(API));
gravitybridgeRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
gravitybridgeRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
gravitybridgeRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
gravitybridgeRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
gravitybridgeRoute("/chain_auth_account", chainAuthAccountHandler(API));
gravitybridgeRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
gravitybridgeRoute("/chain_account_balance", chainAccountBalanceHandler(API));
gravitybridgeRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
gravitybridgeRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
gravitybridgeRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
gravitybridgeRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;