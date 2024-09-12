# Video Course App Backend

Este é o backend de uma aplicação de cursos em vídeo, construído com Node.js, TypeScript, Express, Sequelize (PostgreSQL) e JWT para autenticação.

## Funcionalidades

- **Autenticação de usuários** com JWT
- **CRUD de cursos**
- **Upload e listagem de vídeos**
- **Avaliações de cursos** com comentários e pontuação
- **Rotas protegidas** por middleware de autenticação

## Requisitos

- Node.js (v14 ou superior)
- PostgreSQL (ou outro banco de dados relacional suportado pelo Sequelize)
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/video-course-app-backend.git
   cd video-course-app-backend
   ```

2. Instale as dependências:

```bash

npm install

```

3. Configure o arquivo .env com suas variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

```env

DB_NAME=nome_do_banco_de_dados
DB_USER=usuario_do_banco
DB_PASSWORD=senha_do_banco
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=sua_chave_secreta_jwt
```

4. Configure o banco de dados:

Certifique-se de que o banco de dados PostgreSQL está rodando e execute as migrations:

``` bash

    npx sequelize-cli db:migrate
```

## Execução

### Modo de Desenvolvimento

Para rodar o servidor em modo de desenvolvimento (com recarregamento automático):

``` bash

npm run dev
```

O servidor será iniciado em http://localhost:3000.

## Modo de Produção

Para rodar o servidor em modo de produção:

``` bash

npm start
``` 

## Estrutura do Projeto

```bash

src/
  ├── config/                 # Configurações do banco de dados e Sequelize
  ├── controllers/            # Controladores da aplicação
  ├── middlewares/            # Middlewares (autenticação JWT)
  ├── models/                 # Modelos do Sequelize
  ├── routes/                 # Definição das rotas
  ├── types/                  # Tipos customizados para TypeScript
  ├── app.ts                  # Configuração principal do Express
  └── migrations/             # Migrations do Sequelize
```

## Rotas da API
### Autenticação
```
    Login
        POST /api/auth/login
        Body:

        json

        {
          "email": "usuario@example.com",
          "password": "senha123"
        }
```

### Cursos

    Listar cursos
        GET /api/courses

    Obter detalhes de um curso
        GET /api/courses/:courseId

### Vídeos

    Listar vídeos de um curso
        GET /api/courses/:courseId/videos

### Avaliações

    Criar uma avaliação (necessário autenticação)
        POST /api/courses/:courseId/evaluation
        Body:

        json

        {
          "score": 5,
          "comment": "Ótimo curso!"
        }

        Headers:
            Authorization: Bearer <token_jwt>

    Listar avaliações de um curso
        GET /api/courses/:courseId/evaluations

## Testes

Você pode usar o Postman ou Insomnia para testar as rotas da API.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

MIT

```csharp


### Passos Finais

1. Substitua `"https://github.com/seu-usuario/video-course-app-backend.git"` pelo link do seu repositório.
2. Adicione qualquer instrução ou configuração específica do seu projeto que possa ser necessária.
3. Se você usar Docker ou Docker Compose, você pode incluir as instruções de como iniciar o banco de dados via Docker.

Esse `README.md` cobre as informações essenciais para a configuração e execução da sua aplicação. Se precisar adicionar mais detalhes ou ajustar algo, me avise!

```