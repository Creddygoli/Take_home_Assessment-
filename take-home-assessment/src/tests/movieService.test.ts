import { getMoviesByYear } from '../services/movieService';

describe('getMoviesByYear', () => {
  it('should return movies for the given year', async () => {
    const movies = await getMoviesByYear(2019, 1);
    expect(movies).toBeInstanceOf(Array);
    expect(movies[0]).toHaveProperty('title');
    expect(movies[0]).toHaveProperty('release_date');
    expect(movies[0]).toHaveProperty('vote_average');
    expect(movies[0]).toHaveProperty('editors');
  });
});
