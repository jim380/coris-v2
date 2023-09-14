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

const API = process.env.OSMOSIS_REST_API;
const RPC = process.env.OSMOSIS_RPC_API;

//cron task for osmosis
createCronJob(API, Model.osmosisTxsModel, Model.osmosisBlockModel);

// Define a helper function to prefix the routes with "/osmosis"
function osmosisRoute(path, handler) {
  return app.get(`/osmosis${path}`, corsMiddleware, handler);
}

// Define the routes
osmosisRoute("/blocks/latest", latestBlocksHandler(Model.osmosisBlockModel));
osmosisRoute("/txs", allTxsHandler(Model.osmosisTxsModel));
osmosisRoute("/all_validators", allValidatorsHandler(API));
osmosisRoute("/active_validators", activeValidatorsHandler(API));
osmosisRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
osmosisRoute("/chain_inflation", chainInflationHandler(API));
osmosisRoute("/chain_community_pool", chainCommunityPoolHandler(API));
osmosisRoute("/chain_pool", chainPoolHandler(API));
osmosisRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
osmosisRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
osmosisRoute("/chain_txs_hash", chainTxsByHashHandler(API));
osmosisRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
osmosisRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
osmosisRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
osmosisRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
osmosisRoute("/chain_consensus", chainConsensusStateHandler(RPC));
osmosisRoute("/chain_minting_params", chainMintingParamsHandler(API));
osmosisRoute("/chain_gov_params", chainGovParamsHandler(API));
osmosisRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
osmosisRoute("/chain_staking_params", chainStakingParamsHandler(API));
osmosisRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
osmosisRoute("/chain_node_info", chainNodeInfoHandler(API));
osmosisRoute("/chain_proposals", chainProposalsHandler(API));
osmosisRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
osmosisRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
osmosisRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
osmosisRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
osmosisRoute("/chain_auth_account", chainAuthAccountHandler(API));
osmosisRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
osmosisRoute("/chain_account_balance", chainAccountBalanceHandler(API));
osmosisRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
osmosisRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
osmosisRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
osmosisRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
