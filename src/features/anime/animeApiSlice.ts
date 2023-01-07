import { apiSlice } from "@/features/api/apiSlice";
import type {
   AnimeResponse, CharactersResponse,
   GenreResponse, NewReleases, QueryResponse, SingleAnimeResponse
} from '@/types';

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
         query: (query) => `/anime?letter=${query}`,
         keepUnusedDataFor: 0,
      }),
      getGenres: builder.query<GenreResponse, undefined>({
         query: () => '/genres/anime',
      }),
      getAnimeByGenre: builder.query<QueryResponse, string>({
         query: (genreId) => `/anime?genres=${genreId || ''}`,
      }),
      getTopCharacters: builder.query<CharactersResponse, undefined>({
         query: () => '/top/characters',
         transformResponse: (response: CharactersResponse) => {
            return { ...response, data: response.data?.slice(0, 4) };
         },
      }),
   })
});

export const {
   useGetTopAnimeQuery,
   useGetWatchRecentEpisodesQuery,
   useGetWatchPopularEpisodesQuery,
   useGetAnimeFullByIdQuery,
   useGetAnimeBySearchQuery,
   useGetTopCharactersQuery,
   useGetAnimeByGenreQuery,
   useGetGenresQuery
} = animeApiSlice;