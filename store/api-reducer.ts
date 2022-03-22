import {createApi} from '@reduxjs/toolkit/dist/query/react';
import createAPI from '../services/axios';

export const apiReducer = createApi({
  reducerPath: 'api',
  baseQuery: createAPI(),
  endpoints: (builder) => ({
    getData: builder.query<undefined, void>({
      query: () => ({
        url: 'db.json',
        method: 'get',
      }),
    }),
  }),
});

export const {useGetDataQuery, util: { getRunningOperationPromises }} = apiReducer;
export const { getData } = apiReducer.endpoints;
