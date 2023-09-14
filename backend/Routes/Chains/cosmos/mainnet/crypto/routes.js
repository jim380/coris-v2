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

const API = process.env.CRYPTO_REST_API;
const RPC = process.env.CRYPTO_RPC_API;

//cron task for crypto
createCronJob(API, Model.cryptoTxsModel, Model.cryptoBlockModel);

// Define a helper function to prefix the routes with "/crypto"
function cryptoRoute(path, handler) {
  return app.get(`/crypto${path}`, corsMiddleware, handler);
}

// Define the routes
cryptoRoute("/blocks/latest", latestBlocksHandler(Model.cryptoBlockModel));
cryptoRoute("/txs", allTxsHandler(Model.cryptoTxsModel));
cryptoRoute("/all_validators", allValidatorsHandler(API));
cryptoRoute("/active_validators", activeValidatorsHandler(API));
cryptoRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
cryptoRoute("/chain_inflation", chainInflationHandler(API));
cryptoRoute("/chain_community_pool", chainCommunityPoolHandler(API));
cryptoRoute("/chain_pool", chainPoolHandler(API));
cryptoRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
cryptoRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
cryptoRoute("/chain_txs_hash", chainTxsByHashHandler(API));
cryptoRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
cryptoRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
cryptoRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
cryptoRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
cryptoRoute("/chain_consensus", chainConsensusStateHandler(RPC));
cryptoRoute("/chain_minting_params", chainMintingParamsHandler(API));
cryptoRoute("/chain_gov_params", chainGovParamsHandler(API));
cryptoRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
cryptoRoute("/chain_staking_params", chainStakingParamsHandler(API));
cryptoRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
cryptoRoute("/chain_node_info", chainNodeInfoHandler(API));
cryptoRoute("/chain_proposals", chainProposalsHandler(API));
cryptoRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
cryptoRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
cryptoRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
cryptoRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
cryptoRoute("/chain_auth_account", chainAuthAccountHandler(API));
cryptoRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
cryptoRoute("/chain_account_balance", chainAccountBalanceHandler(API));
cryptoRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
cryptoRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
cryptoRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
cryptoRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
