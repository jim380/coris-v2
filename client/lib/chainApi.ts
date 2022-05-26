import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";
import { chainURL } from "./interfaces/chainsURL";

export const chainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
     mode: 'cors',  
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['LatestBlocks', 'Blocks', 'Validators', 'NodeInfo'],
  endpoints: (builder) => ({
    getChainLatestBlocks: builder.query<any, void>({
      query: () => `/block_search?query=%22block.height%3E10000000%22&per_page=9&page=1`,
      providesTags:  ['LatestBlocks'],
    }), 
     getChainBlocks: builder.query<any, void>({
      query: () => `/Blocks`,
      providesTags:  ['Blocks'],
    }),
     getChainValidators: builder.query<any, void>({
      query: () => `/validators`,
      providesTags:  ['Validators'],
    }),
    getChainNodeInfo: builder.query<any, void>({
      query: () => `/status`,
      providesTags:  ['NodeInfo'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetChainLatestBlocksQuery,
  useGetChainBlocksQuery,
  useGetChainValidatorsQuery,
  useGetChainNodeInfoQuery,
  util: { getRunningOperationPromises },
} = chainApi;


// export endpoints for use in SSR
export const {
   getChainLatestBlocks,
   getChainBlocks, 
   getChainValidators,
   getChainNodeInfo
 } = chainApi.endpoints;
