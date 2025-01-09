import { Request, Response } from 'express';
import { getMoviesByYear } from '../services/movieService';

export const getMovies = async (req: Request, res: Response) => {
  try {
    const year = parseInt(req.params.year, 10);
    const page = parseInt(req.query.page as string, 10) || 1;
    if (isNaN(year)) {
      return res.status(400).json({ error: 'Invalid year format' });
    }
    const movies = await getMoviesByYear(year, page);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching movies' });
  }
};
