import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URI as string
});

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery,
    endpoints: (builder) => ({})
});
