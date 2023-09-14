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

const API = process.env.RIZON_REST_API;
const RPC = process.env.RIZON_RPC_API;

//cron task for rizon
createCronJob(API, Model.rizonTxsModel, Model.rizonBlockModel);

// Define a helper function to prefix the routes with "/rizon"
function rizonRoute(path, handler) {
  return app.get(`/rizon${path}`, corsMiddleware, handler);
}

// Define the routes
rizonRoute("/blocks/latest", latestBlocksHandler(Model.rizonBlockModel));
rizonRoute("/txs", allTxsHandler(Model.rizonTxsModel));
rizonRoute("/all_validators", allValidatorsHandler(API));
rizonRoute("/active_validators", activeValidatorsHandler(API));
rizonRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
rizonRoute("/chain_inflation", chainInflationHandler(API));
rizonRoute("/chain_community_pool", chainCommunityPoolHandler(API));
rizonRoute("/chain_pool", chainPoolHandler(API));
rizonRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
rizonRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
rizonRoute("/chain_txs_hash", chainTxsByHashHandler(API));
rizonRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
rizonRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
rizonRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
rizonRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
rizonRoute("/chain_consensus", chainConsensusStateHandler(RPC));
rizonRoute("/chain_minting_params", chainMintingParamsHandler(API));
rizonRoute("/chain_gov_params", chainGovParamsHandler(API));
rizonRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
rizonRoute("/chain_staking_params", chainStakingParamsHandler(API));
rizonRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
rizonRoute("/chain_node_info", chainNodeInfoHandler(API));
rizonRoute("/chain_proposals", chainProposalsHandler(API));
rizonRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
rizonRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
rizonRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
rizonRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
rizonRoute("/chain_auth_account", chainAuthAccountHandler(API));
rizonRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
rizonRoute("/chain_account_balance", chainAccountBalanceHandler(API));
rizonRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
rizonRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
rizonRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
rizonRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
