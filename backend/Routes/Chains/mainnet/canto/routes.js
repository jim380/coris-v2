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

const API = process.env.CANTO_REST_API;
const RPC = process.env.CANTO_RPC_API;

//cron task for canto
createCronJob(
  API,
  Model.cantoTxsModel,
  Model.cantoBlockModel
);

// Define a helper function to prefix the routes with "/canto"
function cantoRoute(path, handler) {
  return app.get(`/canto${path}`, corsMiddleware, handler);
}

// Define the routes
cantoRoute("/blocks/latest", latestBlocksHandler(Model.cantoBlockModel));
cantoRoute("/txs", allTxsHandler(Model.cantoTxsModel));
cantoRoute("/all_validators", allValidatorsHandler(API));
cantoRoute("/active_validators", activeValidatorsHandler(API));
cantoRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
cantoRoute("/chain_inflation", chainInflationHandler(API));
cantoRoute("/chain_community_pool", chainCommunityPoolHandler(API));
cantoRoute("/chain_pool", chainPoolHandler(API));
cantoRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
cantoRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
cantoRoute("/chain_txs_hash", chainTxsByHashHandler(API));
cantoRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
cantoRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
cantoRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
cantoRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
cantoRoute("/chain_consensus", chainConsensusStateHandler(RPC));
cantoRoute("/chain_minting_params", chainMintingParamsHandler(API));
cantoRoute("/chain_gov_params", chainGovParamsHandler(API));
cantoRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
cantoRoute("/chain_staking_params", chainStakingParamsHandler(API));
cantoRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
cantoRoute("/chain_node_info", chainNodeInfoHandler(API));
cantoRoute("/chain_proposals", chainProposalsHandler(API));
cantoRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
cantoRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
cantoRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
cantoRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
cantoRoute("/chain_auth_account", chainAuthAccountHandler(API));
cantoRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
cantoRoute("/chain_account_balance", chainAccountBalanceHandler(API));
cantoRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
cantoRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
cantoRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
cantoRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
