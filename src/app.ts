import express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(authMiddleware); // Middleware de autenticação aplicado
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
