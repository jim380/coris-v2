const express = require("express");
const Model = require("../../../../Model/Models.jsx");
const app = express();
const createCronJob = require("../../../../cron.js");
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

const API = process.env.NEUTRON_REST_API;
const RPC = process.env.NEUTRON_RPC_API;

// cron task for neutron
createCronJob(
  API, 
  Model.neutronTxsModel, 
  Model.neutronBlockModel
);

// Define a helper function to prefix the routes with "/neutron"
function neutronRoute(path, handler) {
  return app.get(`/neutron${path}`, corsMiddleware, handler);
}

// Define the routes
neutronRoute("/blocks/latest", latestBlocksHandler(Model.neutronBlockModel));
neutronRoute("/txs", allTxsHandler(Model.neutronTxsModel));
neutronRoute("/all_validators", allValidatorsHandler(API));
neutronRoute("/active_validators", activeValidatorsHandler(API));
neutronRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
neutronRoute("/chain_inflation", chainInflationHandler(API));
neutronRoute("/chain_community_pool", chainCommunityPoolHandler(API));
neutronRoute("/chain_pool", chainPoolHandler(API));
neutronRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
neutronRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
neutronRoute("/chain_txs_hash", chainTxsByHashHandler(API));
neutronRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
neutronRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
neutronRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
neutronRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
neutronRoute("/chain_consensus", chainConsensusStateHandler(RPC));
neutronRoute("/chain_minting_params", chainMintingParamsHandler(API));
neutronRoute("/chain_gov_params", chainGovParamsHandler(API));
neutronRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
neutronRoute("/chain_staking_params", chainStakingParamsHandler(API));
neutronRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
neutronRoute("/chain_node_info", chainNodeInfoHandler(API));
neutronRoute("/chain_proposals", chainProposalsHandler(API));
neutronRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
neutronRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
neutronRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
neutronRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
neutronRoute("/chain_auth_account", chainAuthAccountHandler(API));
neutronRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
neutronRoute("/chain_account_balance", chainAccountBalanceHandler(API));
neutronRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
neutronRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
neutronRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
neutronRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;