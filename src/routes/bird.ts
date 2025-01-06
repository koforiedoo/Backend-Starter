import express from 'express';
import { getAllBirdsRoute, createBirdRoute, getBirdById, updateBirdRoute, deleteBirdRoute } from '../controllers/bird';

const router = express.Router();

router.get('/', getAllBirdsRoute);
router.post('/', createBirdRoute);
router.get('/:id', getBirdById);
router.put('/:id', updateBirdRoute);
router.delete('/:id', deleteBirdRoute);

export default router;
