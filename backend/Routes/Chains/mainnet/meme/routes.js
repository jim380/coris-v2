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

const API = process.env.MEME_REST_API;
const RPC = process.env.MEME_RPC_API;

//cron task for meme
createCronJob(
  API,
  Model.memeTxsModel,
  Model.memeBlockModel
);

// Define a helper function to prefix the routes with "/meme"
function memeRoute(path, handler) {
  return app.get(`/meme${path}`, corsMiddleware, handler);
}

// Define the routes
memeRoute("/blocks/latest", latestBlocksHandler(Model.memeBlockModel));
memeRoute("/txs", allTxsHandler(Model.memeTxsModel));
memeRoute("/all_validators", allValidatorsHandler(API));
memeRoute("/active_validators", activeValidatorsHandler(API));
memeRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
memeRoute("/chain_inflation", chainInflationHandler(API));
memeRoute("/chain_community_pool", chainCommunityPoolHandler(API));
memeRoute("/chain_pool", chainPoolHandler(API));
memeRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
memeRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
memeRoute("/chain_txs_hash", chainTxsByHashHandler(API));
memeRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
memeRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
memeRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
memeRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
memeRoute("/chain_consensus", chainConsensusStateHandler(RPC));
memeRoute("/chain_minting_params", chainMintingParamsHandler(API));
memeRoute("/chain_gov_params", chainGovParamsHandler(API));
memeRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
memeRoute("/chain_staking_params", chainStakingParamsHandler(API));
memeRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
memeRoute("/chain_node_info", chainNodeInfoHandler(API));
memeRoute("/chain_proposals", chainProposalsHandler(API));
memeRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
memeRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
memeRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
memeRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
memeRoute("/chain_auth_account", chainAuthAccountHandler(API));
memeRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
memeRoute("/chain_account_balance", chainAccountBalanceHandler(API));
memeRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
memeRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
memeRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
memeRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
