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

const API = process.env.SKALE_REST_API;
const RPC = process.env.SKALE_RPC_API;

//cron task for skale
createCronJob(API, Model.skaleTxsModel, Model.skaleBlockModel);

// Define a helper function to prefix the routes with "/skale"
function skaleRoute(path, handler) {
  return app.get(`/skale${path}`, corsMiddleware, handler);
}

// Define the routes
skaleRoute("/blocks/latest", latestBlocksHandler(Model.skaleBlockModel));
skaleRoute("/txs", allTxsHandler(Model.skaleTxsModel));
skaleRoute("/all_validators", allValidatorsHandler(API));
skaleRoute("/active_validators", activeValidatorsHandler(API));
skaleRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
skaleRoute("/chain_inflation", chainInflationHandler(API));
skaleRoute("/chain_community_pool", chainCommunityPoolHandler(API));
skaleRoute("/chain_pool", chainPoolHandler(API));
skaleRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
skaleRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
skaleRoute("/chain_txs_hash", chainTxsByHashHandler(API));
skaleRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
skaleRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
skaleRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
skaleRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
skaleRoute("/chain_consensus", chainConsensusStateHandler(RPC));
skaleRoute("/chain_minting_params", chainMintingParamsHandler(API));
skaleRoute("/chain_gov_params", chainGovParamsHandler(API));
skaleRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
skaleRoute("/chain_staking_params", chainStakingParamsHandler(API));
skaleRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
skaleRoute("/chain_node_info", chainNodeInfoHandler(API));
skaleRoute("/chain_proposals", chainProposalsHandler(API));
skaleRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
skaleRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
skaleRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
skaleRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
skaleRoute("/chain_auth_account", chainAuthAccountHandler(API));
skaleRoute("/chain_account_txs_by_events", chainAccountTxsByEventsHandler(API));
skaleRoute("/chain_account_balance", chainAccountBalanceHandler(API));
skaleRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
skaleRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
skaleRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
skaleRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
