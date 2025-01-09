import dotenv from 'dotenv';
dotenv.config();

export const config = {
  apiKey: process.env.MOVIE_DB_API_KEY || '',
  baseUrl: 'https://api.themoviedb.org/3',
};
