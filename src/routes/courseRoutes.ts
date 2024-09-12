import { Router } from 'express';
import { getAllCourses, getCourseById } from '../controllers/courseController';

const router = Router();

// Rota para obter todos os cursos
router.get('/courses', getAllCourses);

// Rota para obter um curso específico pelo ID
router.get('/courses/:courseId', getCourseById);

export default router;
