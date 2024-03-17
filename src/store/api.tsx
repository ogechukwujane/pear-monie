import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../baseUrl';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {getAuthToken} from '../utils';

export const baseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const baseResult = await fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: async headers => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      let token = await getAuthToken();
      if (token) {
        headers.set('access_token', `${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);
  if (baseResult.meta?.response?.status === 401) {
    //write logic to logout user if token expires
  }

  return baseResult;
};
