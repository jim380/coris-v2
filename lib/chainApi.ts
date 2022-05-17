import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";
import { chainURL } from "./interfaces/chainsURL";

export const chainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: chainURL.cosmosChainRPC,
     mode: 'cors',  
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['latestBlocks'],
  endpoints: (builder) => ({
   getChainLatestBlocks: builder.query<any, void>({
      query: () => `/block_search?query=%22block.height%3E10000000%22&per_page=9&page=1`,
      //query: () => `/blocks/latest`,
      providesTags:  ['latestBlocks'],
    })
    //getChainNodeInfo: builder.query<any, void>({
     // query: () => `/node_info`,
    //}),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetChainLatestBlocksQuery,
  //useGetChainNodeInfoQuery,
  util: { getRunningOperationPromises },
} = chainApi;


// export endpoints for use in SSR
export const {
   getChainLatestBlocks, 
   //getChainNodeInfo
 } = chainApi.endpoints;
