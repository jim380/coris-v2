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

const API = process.env.CHIHUAHUA_REST_API;
const RPC = process.env.CHIHUAHUA_RPC_API;

//cron task for chihuahua
createCronJob(API, Model.chihuahuaTxsModel, Model.chihuahuaBlockModel);

// Define a helper function to prefix the routes with "/chihuahua"
function chihuahuaRoute(path, handler) {
  return app.get(`/chihuahua${path}`, corsMiddleware, handler);
}

// Define the routes
chihuahuaRoute(
  "/blocks/latest",
  latestBlocksHandler(Model.chihuahuaBlockModel)
);
chihuahuaRoute("/txs", allTxsHandler(Model.chihuahuaTxsModel));
chihuahuaRoute("/all_validators", allValidatorsHandler(API));
chihuahuaRoute("/active_validators", activeValidatorsHandler(API));
chihuahuaRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
chihuahuaRoute("/chain_inflation", chainInflationHandler(API));
chihuahuaRoute("/chain_community_pool", chainCommunityPoolHandler(API));
chihuahuaRoute("/chain_pool", chainPoolHandler(API));
chihuahuaRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
chihuahuaRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
chihuahuaRoute("/chain_txs_hash", chainTxsByHashHandler(API));
chihuahuaRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
chihuahuaRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
chihuahuaRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
chihuahuaRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
chihuahuaRoute("/chain_consensus", chainConsensusStateHandler(RPC));
chihuahuaRoute("/chain_minting_params", chainMintingParamsHandler(API));
chihuahuaRoute("/chain_gov_params", chainGovParamsHandler(API));
chihuahuaRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
chihuahuaRoute("/chain_staking_params", chainStakingParamsHandler(API));
chihuahuaRoute(
  "/chain_distribution_params",
  chainDistributionParamsHandler(API)
);
chihuahuaRoute("/chain_node_info", chainNodeInfoHandler(API));
chihuahuaRoute("/chain_proposals", chainProposalsHandler(API));
chihuahuaRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
chihuahuaRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
chihuahuaRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
chihuahuaRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
chihuahuaRoute("/chain_auth_account", chainAuthAccountHandler(API));
chihuahuaRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
chihuahuaRoute("/chain_account_balance", chainAccountBalanceHandler(API));
chihuahuaRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
chihuahuaRoute(
  "/chain_account_delegations",
  chainAccountDelegationsHandler(API)
);
chihuahuaRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
chihuahuaRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
