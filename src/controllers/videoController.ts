import { Request, Response } from 'express';
import Video from '../models/video';

export const getCourseVideos = async (req: Request, res: Response) => {
  const { courseId } = req.params;

  try {
    const videos = await Video.findAll({ where: { courseId } });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos' });
  }
};
