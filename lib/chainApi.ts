import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { chainURL } from "./interfaces/chainsURL";

export const chainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: chainURL.cosmosChain,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
   getChainLatestBlock: builder.query<any, void>({
      query: () => `/blocks/latest`,
    }),
    //getChainNodeInfo: builder.query<any, void>({
     // query: () => `/node_info`,
    //}),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetChainLatestBlockQuery,
  //useGetChainNodeInfoQuery,
  util: { getRunningOperationPromises },
} = chainApi;


// export endpoints for use in SSR
export const {
   getChainLatestBlock, 
   //getChainNodeInfo
 } = chainApi.endpoints;
