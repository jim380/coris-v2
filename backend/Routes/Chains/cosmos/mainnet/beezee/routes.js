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

const API = process.env.BEEZEE_REST_API;
const RPC = process.env.BEEZEE_RPC_API;

//cron task for beezee
createCronJob(API, Model.beezeeTxsModel, Model.beezeeBlockModel);

// Define a helper function to prefix the routes with "/beezee"
function beezeeRoute(path, handler) {
  return app.get(`/beezee${path}`, corsMiddleware, handler);
}

// Define the routes
beezeeRoute("/blocks/latest", latestBlocksHandler(Model.beezeeBlockModel));
beezeeRoute("/txs", allTxsHandler(Model.beezeeTxsModel));
beezeeRoute("/all_validators", allValidatorsHandler(API));
beezeeRoute("/active_validators", activeValidatorsHandler(API));
beezeeRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
beezeeRoute("/chain_inflation", chainInflationHandler(API));
beezeeRoute("/chain_community_pool", chainCommunityPoolHandler(API));
beezeeRoute("/chain_pool", chainPoolHandler(API));
beezeeRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
beezeeRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
beezeeRoute("/chain_txs_hash", chainTxsByHashHandler(API));
beezeeRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
beezeeRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
beezeeRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
beezeeRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
beezeeRoute("/chain_consensus", chainConsensusStateHandler(RPC));
beezeeRoute("/chain_minting_params", chainMintingParamsHandler(API));
beezeeRoute("/chain_gov_params", chainGovParamsHandler(API));
beezeeRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
beezeeRoute("/chain_staking_params", chainStakingParamsHandler(API));
beezeeRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
beezeeRoute("/chain_node_info", chainNodeInfoHandler(API));
beezeeRoute("/chain_proposals", chainProposalsHandler(API));
beezeeRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
beezeeRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
beezeeRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
beezeeRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
beezeeRoute("/chain_auth_account", chainAuthAccountHandler(API));
beezeeRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
beezeeRoute("/chain_account_balance", chainAccountBalanceHandler(API));
beezeeRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
beezeeRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
beezeeRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
beezeeRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
