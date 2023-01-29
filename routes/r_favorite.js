import express from 'express';
import { getFavorites, getFavoriteById, saveFavorite, deleteFavorite } from '../controller/c_favorite.js';
const router = express.Router();

router.get('/favorite', getFavorites)
router.get('/favorite/:id', getFavoriteById)
router.post('/favorite', saveFavorite)
router.delete('/favorite/:id', deleteFavorite)

export default router;