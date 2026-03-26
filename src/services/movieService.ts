import axios from 'axios';
import type { Movie } from '../types/movie';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface TMDBResponse {
  results: Movie[];
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<TMDBResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: query,
        // api_key: TOKEN,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  return response.data.results;
};
