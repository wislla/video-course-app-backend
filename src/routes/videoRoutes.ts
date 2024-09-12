import { Router } from 'express';
import { getCourseVideos } from '../controllers/videoController';

const router = Router();

// Rota para listar vídeos de um curso
router.get('/courses/:courseId/videos', getCourseVideos);

export default router;
