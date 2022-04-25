import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const chainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.cosmos.network",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    //getChainLastBlock: builder.query<any, void>({
      //query: (name) => ``,
   // }),
    getChainNodeInfo: builder.query<any, void>({
      query: () => `/node_info`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
 // useGetChainLastBlockQuery,
  useGetChainNodeInfoQuery,
  util: { getRunningOperationPromises },
} = chainApi;

// export endpoints for use in SSR
export const { getChainNodeInfo } = chainApi.endpoints;
