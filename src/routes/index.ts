// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './authRoutes';
import courseRoutes from './courseRoutes';
import evaluationRoutes from './evaluationRoutes';
import videoRoutes from './videoRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/courses', courseRoutes);
router.use('/evaluations', evaluationRoutes);
router.use('/videos', videoRoutes);

export default router;
