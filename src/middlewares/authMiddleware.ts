import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Simulação de um usuário autenticado
  const user = { id: 123, email: 'test@example.com' }; // Definindo 'id' como número

  if (user) {
    req.user = user; // Agora req.user está correto com o tipo id: number
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
