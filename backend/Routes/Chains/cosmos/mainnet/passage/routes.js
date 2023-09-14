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

const API = process.env.PASSAGE_REST_API;
const RPC = process.env.PASSAGE_RPC_API;

//cron task for passage
createCronJob(API, Model.passageTxsModel, Model.passageBlockModel);

// Define a helper function to prefix the routes with "/passage"
function passageRoute(path, handler) {
  return app.get(`/passage${path}`, corsMiddleware, handler);
}

// Define the routes
passageRoute("/blocks/latest", latestBlocksHandler(Model.passageBlockModel));
passageRoute("/txs", allTxsHandler(Model.passageTxsModel));
passageRoute("/all_validators", allValidatorsHandler(API));
passageRoute("/active_validators", activeValidatorsHandler(API));
passageRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
passageRoute("/chain_inflation", chainInflationHandler(API));
passageRoute("/chain_community_pool", chainCommunityPoolHandler(API));
passageRoute("/chain_pool", chainPoolHandler(API));
passageRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
passageRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
passageRoute("/chain_txs_hash", chainTxsByHashHandler(API));
passageRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
passageRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
passageRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
passageRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
passageRoute("/chain_consensus", chainConsensusStateHandler(RPC));
passageRoute("/chain_minting_params", chainMintingParamsHandler(API));
passageRoute("/chain_gov_params", chainGovParamsHandler(API));
passageRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
passageRoute("/chain_staking_params", chainStakingParamsHandler(API));
passageRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
passageRoute("/chain_node_info", chainNodeInfoHandler(API));
passageRoute("/chain_proposals", chainProposalsHandler(API));
passageRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
passageRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
passageRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
passageRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
passageRoute("/chain_auth_account", chainAuthAccountHandler(API));
passageRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
passageRoute("/chain_account_balance", chainAccountBalanceHandler(API));
passageRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
passageRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
passageRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
passageRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
