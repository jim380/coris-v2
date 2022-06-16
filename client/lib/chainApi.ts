import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";
import { chainURL } from "./interfaces/chainsURL";

export const chainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://',
     mode: 'cors',  
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['LatestBlocks', 'Blocks', 'Validators', 'ValidatorDetails', 'Pool', 'Delegations', 'UnDelegations', 'Redelegations', 'MintingParameters'],
  endpoints: (builder) => ({
    getChainLatestBlocks: builder.query<any, void>({
      query: () => `${chainURL.cosmosChainRPC}/block_search?query=%22block.height%3E10000000%22&per_page=9&page=1`,
      providesTags:  ['LatestBlocks'],
    }), 
     getChainBlocks: builder.query<any, void>({
      query: () => `${chainURL.cosmosChainRPC}/block_search?query=%22block.height%3E10000000%22&per_page=5&page=1`,
      providesTags:  ['Blocks'],
    }),
     getChainValidators: builder.query<any, void>({
      query: () => `${chainURL.cosmosChainREST}/cosmos/staking/v1beta1/validators?pagination.limit=500`,
      providesTags:  ['Validators'],
    }),   
    getChainValidatorDetails: builder.query<any, any>({
      query: (address) => `${chainURL.cosmosChainREST}/cosmos/staking/v1beta1/validators/${address}`,
      providesTags:  ['ValidatorDetails'],
    }), 
     getChainPool: builder.query<any, void>({
      query: () => `${chainURL.cosmosChainREST}/cosmos/staking/v1beta1/pool`,
      providesTags:  ['Pool'],
    }), 
    getChainDelegations: builder.query<any, any>({
      query: (validator_addr) => `${chainURL.cosmosChainREST}/cosmos/staking/v1beta1/validators/${validator_addr}/delegations?pagination.key=hhhh&pagination.limit=600&pagination.reverse=true`,
      providesTags:  ['Delegations'],
    }),
    getChainUnDelegations: builder.query<any, any>({
      query: (validator_addr) => `${chainURL.cosmosChainREST}/cosmos/staking/v1beta1/validators/${validator_addr}/unbonding_delegations?pagination.key=hhhh&pagination.limit=500&pagination.reverse=true`,
      providesTags:  ['UnDelegations'],
    }),
    getChainRedelegations: builder.query<any, any>({
      query: (delegator_addr) => `${chainURL.cosmosChainREST}/cosmos/staking/v1beta1/delegators/${delegator_addr}/redelegations?pagination.limit=600`,
      providesTags:  ['Redelegations'],
    }),
    getChainMintingParams: builder.query<any, void>({
      query: () => `${chainURL.cosmosChainREST}/cosmos/mint/v1beta1/params`,
      providesTags:  ['MintingParameters'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetChainLatestBlocksQuery,
  useGetChainBlocksQuery,
  useGetChainValidatorsQuery,
  useGetChainValidatorDetailsQuery,
  useGetChainPoolQuery,
  useGetChainDelegationsQuery,
  useGetChainUnDelegationsQuery,
  useGetChainRedelegationsQuery,
  useGetChainMintingParamsQuery,
  util: { getRunningOperationPromises },
} = chainApi;

//can be used in SSR
export const {
   getChainLatestBlocks,
   getChainBlocks, 
   getChainValidators,
   getChainPool,
   getChainDelegations,
 } = chainApi.endpoints;
