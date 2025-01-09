import express from 'express';
import { getMovies } from '../controllers/moviesController';

const router = express.Router();
router.get('/movies/:year', getMovies);

export default router;
