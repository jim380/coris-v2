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

const API = process.env.STRIDE_REST_API;
const RPC = process.env.STRIDE_RPC_API;

// cron task for stride
createCronJob(API, Model.strideTxsModel, Model.strideBlockModel);

// Define a helper function to prefix the routes with "/stride"
function strideRoute(path, handler) {
  return app.get(`/stride${path}`, corsMiddleware, handler);
}

// Define the routes
strideRoute("/blocks/latest", latestBlocksHandler(Model.strideBlockModel));
strideRoute("/txs", allTxsHandler(Model.strideTxsModel));
strideRoute("/all_validators", allValidatorsHandler(API));
strideRoute("/active_validators", activeValidatorsHandler(API));
strideRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
strideRoute("/chain_inflation", chainInflationHandler(API));
strideRoute("/chain_community_pool", chainCommunityPoolHandler(API));
strideRoute("/chain_pool", chainPoolHandler(API));
strideRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
strideRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
strideRoute("/chain_txs_hash", chainTxsByHashHandler(API));
strideRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
strideRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
strideRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
strideRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
strideRoute("/chain_consensus", chainConsensusStateHandler(RPC));
strideRoute("/chain_minting_params", chainMintingParamsHandler(API));
strideRoute("/chain_gov_params", chainGovParamsHandler(API));
strideRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
strideRoute("/chain_staking_params", chainStakingParamsHandler(API));
strideRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
strideRoute("/chain_node_info", chainNodeInfoHandler(API));
strideRoute("/chain_proposals", chainProposalsHandler(API));
strideRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
strideRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
strideRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
strideRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
strideRoute("/chain_auth_account", chainAuthAccountHandler(API));
strideRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
strideRoute("/chain_account_balance", chainAccountBalanceHandler(API));
strideRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
strideRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
strideRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
strideRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
