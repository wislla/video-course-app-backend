// src/@types/express/index.d.ts

import { IUser } from '../../models/User'; // Ajuste o caminho para o modelo ou interface de usuário

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Aqui você define que a propriedade 'user' existe no Request
    }
  }
}
