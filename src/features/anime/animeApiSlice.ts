import { apiSlice } from "@/features/api/apiSlice";
import type { AnimeResponse, NewReleases, QueryResponse, SingleAnimeResponse } from '@/types';

export const animeApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getTopAnime: builder.query<AnimeResponse, undefined>({
         query: () => '/top/anime',
         transformResponse: (response: AnimeResponse) => {
            return { ...response, data: response.data?.slice(0, 6) };
         }
      }),
      getWatchRecentEpisodes: builder.query<NewReleases, undefined>({
         query: () => '/watch/episodes',
         transformResponse: (response: NewReleases) => {
            return {
               ...response,
               data: response.data?.filter(el => !el.region_locked).slice(0, 6)
            };
         },
      }),
      getWatchPopularEpisodes: builder.query<NewReleases, undefined>({
         query: () => '/watch/episodes/popular',
         transformResponse: (response: NewReleases) => {
            return {
               ...response,
               data: response.data?.filter(el => !el.region_locked).slice(0, 6)
            };
         },
      }),
      getAnimeFullById: builder.query<SingleAnimeResponse, string>({
         query: (id) => `/anime/${id}/full`
      }),
      getAnimeBySearch: builder.query<QueryResponse, string>({
         query: (query) => `/anime?letter=${query}`
      }),
      getAnimeByGenre: builder.query<QueryResponse, string>({
         query: (genre) => `/anime?genre=${genre}`
      })
   })
});

export const {
   useGetTopAnimeQuery,
   useGetWatchRecentEpisodesQuery,
   useGetWatchPopularEpisodesQuery,
   useGetAnimeFullByIdQuery,
   useGetAnimeBySearchQuery
} = animeApiSlice;