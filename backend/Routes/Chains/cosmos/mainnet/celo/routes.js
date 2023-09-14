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

const API = process.env.CELO_REST_API;
const RPC = process.env.CELO_RPC_API;

//cron task for celo
createCronJob(API, Model.celoTxsModel, Model.celoBlockModel);

// Define a helper function to prefix the routes with "/celo"
function celoRoute(path, handler) {
  return app.get(`/celo${path}`, corsMiddleware, handler);
}

// Define the routes
celoRoute("/blocks/latest", latestBlocksHandler(Model.celoBlockModel));
celoRoute("/txs", allTxsHandler(Model.celoTxsModel));
celoRoute("/all_validators", allValidatorsHandler(API));
celoRoute("/active_validators", activeValidatorsHandler(API));
celoRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
celoRoute("/chain_inflation", chainInflationHandler(API));
celoRoute("/chain_community_pool", chainCommunityPoolHandler(API));
celoRoute("/chain_pool", chainPoolHandler(API));
celoRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
celoRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
celoRoute("/chain_txs_hash", chainTxsByHashHandler(API));
celoRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
celoRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
celoRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
celoRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
celoRoute("/chain_consensus", chainConsensusStateHandler(RPC));
celoRoute("/chain_minting_params", chainMintingParamsHandler(API));
celoRoute("/chain_gov_params", chainGovParamsHandler(API));
celoRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
celoRoute("/chain_staking_params", chainStakingParamsHandler(API));
celoRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
celoRoute("/chain_node_info", chainNodeInfoHandler(API));
celoRoute("/chain_proposals", chainProposalsHandler(API));
celoRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
celoRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
celoRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
celoRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
celoRoute("/chain_auth_account", chainAuthAccountHandler(API));
celoRoute("/chain_account_txs_by_events", chainAccountTxsByEventsHandler(API));
celoRoute("/chain_account_balance", chainAccountBalanceHandler(API));
celoRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
celoRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
celoRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
celoRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
