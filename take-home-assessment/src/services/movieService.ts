import axios from '../utils/axiosInstance';
import { Movie } from '../models/movie';

export const getMoviesByYear = async (year: number, page: number): Promise<Movie[]> => {
  try {
    const discoverUrl = `/discover/movie?language=en-US&page=${page}&primary_release_year=${year}&sort_by=popularity.desc`;
    const discoverResponse = await axios.get(discoverUrl);
    const movies = discoverResponse.data.results;

    const movieDetails = await Promise.all(movies.map(async (movie: any) => {
      const creditsUrl = `/movie/${movie.id}/credits`;
      try {
        const creditsResponse = await axios.get(creditsUrl);
        const editors = creditsResponse.data.crew
          .filter((crewMember: any) => crewMember.known_for_department === 'Editing')
          .map((editor: any) => editor.name);
        return {
          title: movie.title,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          editors,
        };
      } catch {
        return {
          title: movie.title,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          editors: [],
        };
      }
    }));

    return movieDetails;
  } catch (error) {
    throw new Error('Failed to fetch movie data');
  }
};
