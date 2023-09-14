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

const API = process.env.SIFCHAIN_REST_API;
const RPC = process.env.SIFCHAIN_RPC_API;

//cron task for sifchain
createCronJob(API, Model.sifchainTxsModel, Model.sifchainBlockModel);

// Define a helper function to prefix the routes with "/sifchain"
function sifchainRoute(path, handler) {
  return app.get(`/sifchain${path}`, corsMiddleware, handler);
}

// Define the routes
sifchainRoute("/blocks/latest", latestBlocksHandler(Model.sifchainBlockModel));
sifchainRoute("/txs", allTxsHandler(Model.sifchainTxsModel));
sifchainRoute("/all_validators", allValidatorsHandler(API));
sifchainRoute("/active_validators", activeValidatorsHandler(API));
sifchainRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
sifchainRoute("/chain_inflation", chainInflationHandler(API));
sifchainRoute("/chain_community_pool", chainCommunityPoolHandler(API));
sifchainRoute("/chain_pool", chainPoolHandler(API));
sifchainRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
sifchainRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
sifchainRoute("/chain_txs_hash", chainTxsByHashHandler(API));
sifchainRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
sifchainRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
sifchainRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
sifchainRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
sifchainRoute("/chain_consensus", chainConsensusStateHandler(RPC));
sifchainRoute("/chain_minting_params", chainMintingParamsHandler(API));
sifchainRoute("/chain_gov_params", chainGovParamsHandler(API));
sifchainRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
sifchainRoute("/chain_staking_params", chainStakingParamsHandler(API));
sifchainRoute(
  "/chain_distribution_params",
  chainDistributionParamsHandler(API)
);
sifchainRoute("/chain_node_info", chainNodeInfoHandler(API));
sifchainRoute("/chain_proposals", chainProposalsHandler(API));
sifchainRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
sifchainRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
sifchainRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
sifchainRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
sifchainRoute("/chain_auth_account", chainAuthAccountHandler(API));
sifchainRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
sifchainRoute("/chain_account_balance", chainAccountBalanceHandler(API));
sifchainRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
sifchainRoute(
  "/chain_account_delegations",
  chainAccountDelegationsHandler(API)
);
sifchainRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
sifchainRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
