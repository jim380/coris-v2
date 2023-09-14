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

const API = process.env.STARGAZE_REST_API;
const RPC = process.env.STARGAZE_RPC_API;

// cron task for stargaze
createCronJob(API, Model.stargazeTxsModel, Model.stargazeBlockModel);

// Define a helper function to prefix the routes with "/stargaze"
function stargazeRoute(path, handler) {
  return app.get(`/stargaze${path}`, corsMiddleware, handler);
}

// Define the routes
stargazeRoute("/blocks/latest", latestBlocksHandler(Model.stargazeBlockModel));
stargazeRoute("/txs", allTxsHandler(Model.stargazeTxsModel));
stargazeRoute("/all_validators", allValidatorsHandler(API));
stargazeRoute("/active_validators", activeValidatorsHandler(API));
stargazeRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
stargazeRoute("/chain_inflation", chainInflationHandler(API));
stargazeRoute("/chain_community_pool", chainCommunityPoolHandler(API));
stargazeRoute("/chain_pool", chainPoolHandler(API));
stargazeRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
stargazeRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
stargazeRoute("/chain_txs_hash", chainTxsByHashHandler(API));
stargazeRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
stargazeRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
stargazeRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
stargazeRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
stargazeRoute("/chain_consensus", chainConsensusStateHandler(RPC));
stargazeRoute("/chain_minting_params", chainMintingParamsHandler(API));
stargazeRoute("/chain_gov_params", chainGovParamsHandler(API));
stargazeRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
stargazeRoute("/chain_staking_params", chainStakingParamsHandler(API));
stargazeRoute(
  "/chain_distribution_params",
  chainDistributionParamsHandler(API)
);
stargazeRoute("/chain_node_info", chainNodeInfoHandler(API));
stargazeRoute("/chain_proposals", chainProposalsHandler(API));
stargazeRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
stargazeRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
stargazeRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
stargazeRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
stargazeRoute("/chain_auth_account", chainAuthAccountHandler(API));
stargazeRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
stargazeRoute("/chain_account_balance", chainAccountBalanceHandler(API));
stargazeRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
stargazeRoute(
  "/chain_account_delegations",
  chainAccountDelegationsHandler(API)
);
stargazeRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
stargazeRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
