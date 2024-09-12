import { Router } from 'express';
import { createEvaluation, getEvaluationsByCourse } from '../controllers/evaluationController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/courses/:courseId/evaluation', authMiddleware, createEvaluation);
router.get('/courses/:courseId/evaluations', authMiddleware, getEvaluationsByCourse);

export default router;