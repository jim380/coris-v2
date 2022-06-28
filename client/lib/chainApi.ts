import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";
import { chainURL } from "./interfaces/chainsURL";

export const chainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: chainURL.cosmosChainREST,
     mode: 'cors',  
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Height', 'Validators','ActiveValidators', 'ValidatorDetails', 'Pool', 'Delegations', 'UnDelegations', 'Redelegations', 'MintingParameters', 'GovParameters', 'SlashingParameters', 'StakingParameters', 'DistributionParameters', 'NodeInfo', 'Proposals', 'ProposalDetails'],
  endpoints: (builder) => ({
     getChainBlockHeight: builder.query<any, any>({
      query: (height) => `/blocks/${height}`,
      providesTags:  ['Height'],
    }),   
    getChainValidators: builder.query<any, void>({
      query: () => `/cosmos/staking/v1beta1/validators?pagination.limit=500`,
      providesTags:  ['Validators'],
    }),  
    getChainActiveValidators: builder.query<any, void>({
      query: () => `/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=500`,
      providesTags:  ['ActiveValidators'],
    }),   
    getChainValidatorDetails: builder.query<any, any>({
      query: (address) => `/cosmos/staking/v1beta1/validators/${address}`,
      providesTags:  ['ValidatorDetails'],
    }), 
     getChainPool: builder.query<any, void>({
      query: () => `/cosmos/staking/v1beta1/pool`,
      providesTags:  ['Pool'],
    }), 
    getChainDelegations: builder.query<any, any>({
      query: (validator_addr) => `/cosmos/staking/v1beta1/validators/${validator_addr}/delegations?pagination.key=hhhh&pagination.limit=600&pagination.reverse=true`,
      providesTags:  ['Delegations'],
    }),
    getChainUnDelegations: builder.query<any, any>({
      query: (validator_addr) => `/cosmos/staking/v1beta1/validators/${validator_addr}/unbonding_delegations?pagination.key=hhhh&pagination.limit=500&pagination.reverse=true`,
      providesTags:  ['UnDelegations'],
    }),
    getChainRedelegations: builder.query<any, any>({
      query: (delegator_addr) => `/cosmos/staking/v1beta1/delegators/${delegator_addr}/redelegations?pagination.limit=600`,
      providesTags:  ['Redelegations'],
    }),
    getChainMintingParams: builder.query<any, void>({
      query: () => `/cosmos/mint/v1beta1/params`,
      providesTags:  ['MintingParameters'],
    }),
    getChainGovParams: builder.query<any, any>({
      query: (params_type) => `/cosmos/gov/v1beta1/params/${params_type}`,
      providesTags:  ['GovParameters'],
    }),
    getChainSlashingParams: builder.query<any,void>({
      query: () => `/cosmos/slashing/v1beta1/params`,
      providesTags:  ['SlashingParameters'],
    }),
    getChainStakingParams: builder.query<any,void>({
      query: () => `/cosmos/staking/v1beta1/params`,
      providesTags:  ['StakingParameters'],
    }),
    getChainDistributionParams: builder.query<any,void>({
      query: () => `/cosmos/distribution/v1beta1/params`,
      providesTags:  ['DistributionParameters'],
    }),
    getChainNodeInfo: builder.query<any,void>({
      query: () => `/node_info`,
      providesTags:  ['NodeInfo'],
    }),
    getChainProposals: builder.query<any,void>({
      query: () => `cosmos/gov/v1beta1/proposals?pagination.limit=500&pagination.reverse=true`,
      providesTags:  ['Proposals'],
    }),
    getChainProposalDetails: builder.query<any, any>({
      query: (proposal_id) => `/cosmos/gov/v1beta1/proposals/${proposal_id}`,
      providesTags:  ['ProposalDetails'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetChainBlockHeightQuery,
  useGetChainValidatorsQuery,
  useGetChainActiveValidatorsQuery,
  useGetChainValidatorDetailsQuery,
  useGetChainPoolQuery,
  useGetChainDelegationsQuery,
  useGetChainUnDelegationsQuery,
  useGetChainRedelegationsQuery,
  useGetChainMintingParamsQuery,
  useGetChainGovParamsQuery,
  useGetChainSlashingParamsQuery,
  useGetChainStakingParamsQuery,
  useGetChainDistributionParamsQuery,
  useGetChainNodeInfoQuery,
  useGetChainProposalsQuery,
  useGetChainProposalDetailsQuery,
  util: { getRunningOperationPromises },
} = chainApi;

//can be used in SSR
export const {
   getChainValidators,
   getChainPool,
   getChainDelegations,
 } = chainApi.endpoints;
