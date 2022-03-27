import {createApi} from '@reduxjs/toolkit/dist/query/react';
import createAPI from '../services/axios';

export const apiReducer = createApi({
  reducerPath: 'api',
  baseQuery: createAPI(),
  endpoints: (builder) => ({
    getData: builder.query<any, void>({
      query: () => ({
        url: 'db.json',
        method: 'get',
      }),
      transformResponse: (response: any) => {
        console.log(response)
        return response.bookList
      },
    }),

    // getUsersData: builder.query<any, void>({
    //   query: () => ({
    //     url: 'users.json',
    //     method: 'get',
    //   }),
    //   transformResponse: (response: any) => response.users,
    // }),

    // checkAuth: builder.query({
    //   query: () => ({
    //     url: `${}`,
    //     method: 'get',
    //   }),
    // }),

    // login: builder.mutation<AuthData, AuthTypeData>({
    //   query: (credentials) => ({
    //     url: `${APIRoute.Login}`,
    //     method: 'post',
    //     data: credentials,
    //   }),
    //   transformResponse: (response: AuthData) => {
    //     response && saveToken(response.token);
    //     // response && saveEmail(response.email);
    //     return response;
    //   },
    // }),
  }),
});

export const {useGetDataQuery, util: { getRunningOperationPromises }} = apiReducer;
export const { getData} = apiReducer.endpoints;
