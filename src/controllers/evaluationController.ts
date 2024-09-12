// src/controllers/evaluationController.ts
import { Request, Response } from 'express';
import Evaluation from '../models/evaluation';

export const createEvaluation = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const { score, comment } = req.body;

  if (!req.user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
    const evaluation = await Evaluation.create({
      courseId,
      score,
      comment,
      userId: req.user.id,
    });
    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ message: 'Error creating evaluation' });
  }
};

export const getEvaluationsByCourse = async (req: Request, res: Response) => {
  const { courseId } = req.params;

  try {
    const evaluations = await Evaluation.findAll({
      where: { courseId },
    });
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching evaluations' });
  }
};
