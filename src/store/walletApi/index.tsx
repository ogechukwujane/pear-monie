import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../api';

export const walletApi = createApi({
  reducerPath: 'walletApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getBalance: builder.query<IBalance, void>({
      query: () => ({
        url: '/api/v1/balance',
        method: 'GET',
      }),
    }),
    getAllTransaction: builder.query<IAllTransaction, void>({
      query: () => ({
        url: '/api/v1/transactions',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetBalanceQuery, useGetAllTransactionQuery} = walletApi;
