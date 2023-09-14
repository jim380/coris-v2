const getCache = require("../../../redis/getCache");
const setCache = require("../../../redis/setCache");
const fetchData = require("..");
const { getLatestBlocks, getAllTxs } = require("../../dbQueries");
const endpoints = require("../../endpoints.jsx");

//Set the caching time in seconds (e.g., 600 seconds = 10Mins)
const cacheExpirationInSeconds = 600;

const latestBlocksHandler = (blockModel) => async (req, res) => {
  try {
    const data = await getLatestBlocks(req, res, blockModel);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const allTxsHandler = (txModel) => async (req, res) => {
  try {
    const data = await getAllTxs(req, res, txModel);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const allValidatorsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.allChainValidators;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.allChainValidators);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const activeValidatorsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.activeChainValidators;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.activeChainValidators);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainValidatorsDetailsHandler = (api) => async (req, res) => {
  const address = req.query.address;
  const cacheKey = api + endpoints.chainValidatorsDetails(address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainValidatorsDetails(address));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainInflationHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.chainInflation;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainInflation);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainCommunityPoolHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.chainCommunityPool;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainCommunityPool);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainPoolHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.chainPool;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainPool);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainBlockHeightDetailsHandler = (api) => async (req, res) => {
  const height = req.query.height;
  const cacheKey = api + endpoints.chainBlockHeightDetails(height);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainBlockHeightDetails(height));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainBlockHeightTxsHandler = (api) => async (req, res) => {
  const height = req.query.height;
  const cacheKey = api + endpoints.chainBlockHeightTxs(height);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainBlockHeightTxs(height));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainTxsByHashHandler = (api) => async (req, res) => {
  const hash = req.query.hash;
  const cacheKey = api + endpoints.chainTxsByHash(hash);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.chainTxsByHash(hash));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainValidatorsSlashingSigningInfosDetailsHandler =
  (api) => async (req, res) => {
    const cons_address = req.query.cons_address;
    const cacheKey =
      api + endpoints.chainValidatorsSlashingSigningInfosDetails(cons_address);
    try {
      let data = await getCache(cacheKey);
      if (!data) {
        data = await fetchData(
          api +
            endpoints.chainValidatorsSlashingSigningInfosDetails(cons_address)
        );
        await setCache(cacheKey, data, cacheExpirationInSeconds);
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const chainValidatorDelegationsHandler = (api) => async (req, res) => {
  const validator_address = req.query.validator_address;
  const cacheKey = api + endpoints.chainValidatorDelegations(validator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.chainValidatorDelegations(validator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainValidatorUnDelegationsHandler = (api) => async (req, res) => {
  const validator_address = req.query.validator_address;
  const cacheKey =
    api + endpoints.chainValidatorUnDelegations(validator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.chainValidatorUnDelegations(validator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainValidatorReDelegationsHandler = (api) => async (req, res) => {
  const delegator_address = req.query.delegator_address;
  const cacheKey =
    api + endpoints.chainValidatorReDelegations(delegator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.chainValidatorReDelegations(delegator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainConsensusStateHandler = (rpc) => async (req, res) => {
  const cacheKey = rpc + endpoints.consensusState;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(rpc + endpoints.consensusState);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainMintingParamsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.mintingParams;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.mintingParams);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainGovParamsHandler = (api) => async (req, res) => {
  const params_type = req.query.params_type;
  const cacheKey = api + endpoints.govParams(params_type);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.govParams(params_type));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainSlashingParamsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.slashingParams;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.slashingParams);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainStakingParamsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.stakingParams;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.stakingParams);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainDistributionParamsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.distributionParams;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.distributionParams);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainNodeInfoHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.nodeInfo;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.nodeInfo);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainProposalsHandler = (api) => async (req, res) => {
  const cacheKey = api + endpoints.proposals;
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.proposals);
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainProposalDetailsHandler = (api) => async (req, res) => {
  const proposal_id = req.query.proposal_id;
  const cacheKey = api + endpoints.proposalDetails(proposal_id);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.proposalDetails(proposal_id));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainProposalVotingOptionsHandler = (api) => async (req, res) => {
  const id = req.query.id;
  const cacheKey = api + endpoints.proposalVotingOptions(id);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.proposalVotingOptions(id));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainProposalTallyOptionsHandler = (api) => async (req, res) => {
  const id = req.query.id;
  const cacheKey = api + endpoints.proposalTallyOptions(id);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.proposalTallyOptions(id));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainProposalDepositsHandler = (api) => async (req, res) => {
  const id = req.query.id;
  const cacheKey = api + endpoints.proposalDeposits(id);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.proposalDeposits(id));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAuthAccountHandler = (api) => async (req, res) => {
  const address = req.query.address;
  const cacheKey = api + endpoints.authAccount(address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.authAccount(address));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAccountTxsByEventsHandler = (api) => async (req, res) => {
  const address = req.query.address;
  const cacheKey = api + endpoints.accountTxsByEvents(address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.accountTxsByEvents(address));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAccountBalanceHandler = (api) => async (req, res) => {
  const address = req.query.address;
  const cacheKey = api + endpoints.accountBalance(address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(api + endpoints.accountBalance(address));
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAccountDelegationRewardsHandler = (api) => async (req, res) => {
  const delegator_address = req.query.delegator_address;
  const cacheKey = api + endpoints.accountDelegationRewards(delegator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.accountDelegationRewards(delegator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAccountDelegationsHandler = (api) => async (req, res) => {
  const delegator_address = req.query.delegator_address;
  const cacheKey = api + endpoints.accountDelegations(delegator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.accountDelegations(delegator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAccountReDelegationsHandler = (api) => async (req, res) => {
  const delegator_address = req.query.delegator_address;
  const cacheKey = api + endpoints.accountReDelegations(delegator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.accountReDelegations(delegator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chainAccountUnDelegationsHandler = (api) => async (req, res) => {
  const delegator_address = req.query.delegator_address;
  const cacheKey = api + endpoints.accountUnDelegations(delegator_address);
  try {
    let data = await getCache(cacheKey);
    if (!data) {
      data = await fetchData(
        api + endpoints.accountUnDelegations(delegator_address)
      );
      await setCache(cacheKey, data, cacheExpirationInSeconds);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  latestBlocksHandler,
  allTxsHandler,
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
};
