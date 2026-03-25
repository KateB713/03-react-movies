import axios from 'axios';

// const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: query,
        api_key: TOKEN,
      },
      // headers: {
      //   Authorization: `Bearer ${TOKEN}`,
      // },
    }
  );

  return response.data.results;
};
