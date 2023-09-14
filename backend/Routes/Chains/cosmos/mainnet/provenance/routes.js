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

const API = process.env.PROVENANCE_REST_API;
const RPC = process.env.PROVENANCE_RPC_API;

//cron task for provenance
createCronJob(API, Model.provenanceTxsModel, Model.provenanceBlockModel);

// Define a helper function to prefix the routes with "/provenance"
function provenanceRoute(path, handler) {
  return app.get(`/provenance${path}`, corsMiddleware, handler);
}

// Define the routes
provenanceRoute("/blocks/latest", latestBlocksHandler(Model.provenanceBlockModel));
provenanceRoute("/txs", allTxsHandler(Model.provenanceTxsModel));
provenanceRoute("/all_validators", allValidatorsHandler(API));
provenanceRoute("/active_validators", activeValidatorsHandler(API));
provenanceRoute("/chain_validator_details", chainValidatorsDetailsHandler(API));
provenanceRoute("/chain_inflation", chainInflationHandler(API));
provenanceRoute("/chain_community_pool", chainCommunityPoolHandler(API));
provenanceRoute("/chain_pool", chainPoolHandler(API));
provenanceRoute("/block_height_details", chainBlockHeightDetailsHandler(API));
provenanceRoute("/block_height_txs", chainBlockHeightTxsHandler(API));
provenanceRoute("/chain_txs_hash", chainTxsByHashHandler(API));
provenanceRoute(
  "/chain_validator_slashing_signing_info_details",
  chainValidatorsSlashingSigningInfosDetailsHandler(API)
);
provenanceRoute(
  "/chain_validator_delegations",
  chainValidatorDelegationsHandler(API)
);
provenanceRoute(
  "/chain_validator_undelegations",
  chainValidatorUnDelegationsHandler(API)
);
provenanceRoute(
  "/chain_validator_redelegations",
  chainValidatorReDelegationsHandler(API)
);
provenanceRoute("/chain_consensus", chainConsensusStateHandler(RPC));
provenanceRoute("/chain_minting_params", chainMintingParamsHandler(API));
provenanceRoute("/chain_gov_params", chainGovParamsHandler(API));
provenanceRoute("/chain_slashing_params", chainSlashingParamsHandler(API));
provenanceRoute("/chain_staking_params", chainStakingParamsHandler(API));
provenanceRoute("/chain_distribution_params", chainDistributionParamsHandler(API));
provenanceRoute("/chain_node_info", chainNodeInfoHandler(API));
provenanceRoute("/chain_proposals", chainProposalsHandler(API));
provenanceRoute("/chain_proposal_details", chainProposalDetailsHandler(API));
provenanceRoute(
  "/chain_proposal_voting_options",
  chainProposalVotingOptionsHandler(API)
);
provenanceRoute(
  "/chain_proposal_tally_options",
  chainProposalTallyOptionsHandler(API)
);
provenanceRoute("/chain_proposal_deposits", chainProposalDepositsHandler(API));
provenanceRoute("/chain_auth_account", chainAuthAccountHandler(API));
provenanceRoute(
  "/chain_account_txs_by_events",
  chainAccountTxsByEventsHandler(API)
);
provenanceRoute("/chain_account_balance", chainAccountBalanceHandler(API));
provenanceRoute(
  "/chain_account_delegation_rewards",
  chainAccountDelegationRewardsHandler(API)
);
provenanceRoute("/chain_account_delegations", chainAccountDelegationsHandler(API));
provenanceRoute(
  "/chain_account_redelegations",
  chainAccountReDelegationsHandler(API)
);
provenanceRoute(
  "/chain_account_undelegations",
  chainAccountUnDelegationsHandler(API)
);

module.exports = app;
