const express = require("express");
const Model = require("../../../../Model/Models.jsx");
const createCronJob = require("../../../../cron.js");
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
} = require("../../../../data/handlers.js");
const corsMiddleware = require("../../../../corsMiddleware.js");

const API = process.env.MUN_REST_API;
const RPC = process.env.MUN_RPC_API;

//cron task for mun
createCronJob(
  API,
  Model.munTxsModel,
  Model.munBlockModel
);

// Define a helper function to prefix the routes with "/mun"
function munRoute(path, handler) {
  return app.get(`/mun${path}`, corsMiddleware, handler);
}

// Define the routes
munRoute("/blocks/latest", latestBlocksHandler(Model.munBlockModel));
munRoute("/txs", allTxsHandler(Model.munTxsModel));
munRoute("/all_validators", allValidatorsHandler(API));
munRoute("/active_validators", activeValidatorsHandler(API));
munRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
munRoute("/chain_inflation", chainInflationHandler(API));
munRoute("/chain_community_pool", chainCommunityPoolHandler(API));
munRoute("/chain_pool", chainPoolHandler(API));
munRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
munRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
munRoute("/chain_txs_hash", chainTxsByHashHandler(API));
munRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
munRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
munRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
munRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
munRoute("/chain_consensus", chainConsensusStateHandler(RPC));
munRoute("/chain_minting_params", chainMintingParamsHandler(API));
munRoute("/chain_gov_params", chainGovParamsHandler(API));
munRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
munRoute("/chain_staking_params", chainStakingParamsHandler(API));
munRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
munRoute("/chain_node_info", chainNodeInfoHandler(API));
munRoute("/chain_proposals", chainProposalsHandler(API));
munRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
munRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
munRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
munRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
munRoute("/chain_auth_account", chainAuthAccountHandler(API));
munRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
munRoute("/chain_account_balance", chainAccountBalanceHandler(API));
munRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
munRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
munRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
munRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
