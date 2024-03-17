import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    signup: builder.mutation<ISignUp, ISignUp>({
      query: body => ({
        url: '/api/v1/register',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<ILoginResponse, ILogin>({
      query: body => ({
        url: '/api/v1/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useSignupMutation, useLoginMutation} = authApi;
