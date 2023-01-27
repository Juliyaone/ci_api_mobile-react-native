import * as urls from "./urls";
import {getTokenFromStorage} from "../auth/tokenStorage";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
   baseQuery: fetchBaseQuery(
        {
            baseUrl: urls.BASE_URL,
            prepareHeaders: async (headers) => {
                const token = await getTokenFromStorage()
                if (token) {
                    headers.set('authorization', `Bearer ${token}`);
                }

                return headers;
            },
        }),
  endpoints: () => ({}),
  reducerPath: 'userApi',
  tagTypes: ['MetaInfo', 'Videos', 'Rate', 'User', 'Complexes', 'NOT_FOUND', 'UNKNOWN_ERROR', 'FirstEntryInfo', 'Mood', 'Avatar'],
});