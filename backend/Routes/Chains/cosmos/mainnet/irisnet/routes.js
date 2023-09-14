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

const API = process.env.IRISNET_REST_API;
const RPC = process.env.IRISNET_RPC_API;

//cron task for irisnet
createCronJob(API, Model.irisnetTxsModel, Model.irisnetBlockModel);

// Define a helper function to prefix the routes with "/irisnet"
function irisnetRoute(path, handler) {
  return app.get(`/irisnet${path}`, corsMiddleware, handler);
}

// Define the routes
irisnetRoute("/blocks/latest", latestBlocksHandler(Model.irisnetBlockModel));
irisnetRoute("/txs", allTxsHandler(Model.irisnetTxsModel));
irisnetRoute("/all_validators", allValidatorsHandler(API));
irisnetRoute("/active_validators", activeValidatorsHandler(API));
irisnetRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
irisnetRoute("/chain_inflation", chainInflationHandler(API));
irisnetRoute("/chain_community_pool", chainCommunityPoolHandler(API));
irisnetRoute("/chain_pool", chainPoolHandler(API));
irisnetRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
irisnetRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
irisnetRoute("/chain_txs_hash", chainTxsByHashHandler(API));
irisnetRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
irisnetRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
irisnetRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
irisnetRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
irisnetRoute("/chain_consensus", chainConsensusStateHandler(RPC));
irisnetRoute("/chain_minting_params", chainMintingParamsHandler(API));
irisnetRoute("/chain_gov_params", chainGovParamsHandler(API));
irisnetRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
irisnetRoute("/chain_staking_params", chainStakingParamsHandler(API));
irisnetRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
irisnetRoute("/chain_node_info", chainNodeInfoHandler(API));
irisnetRoute("/chain_proposals", chainProposalsHandler(API));
irisnetRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
irisnetRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
irisnetRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
irisnetRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
irisnetRoute("/chain_auth_account", chainAuthAccountHandler(API));
irisnetRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
irisnetRoute("/chain_account_balance", chainAccountBalanceHandler(API));
irisnetRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
irisnetRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
irisnetRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
irisnetRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
