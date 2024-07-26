import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiService = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3/' }),
    endpoints: (builder) => ({
      get: builder.query({
        query: () => 'abd6f2f4-7c97-43e2-8afc-2d7e4cc1440c',
      }),
    }),
  });
  
  export const { useGetQuery } = ApiService;