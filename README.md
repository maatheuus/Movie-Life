# Movie Life

Movie Life é um site que permite aos usuários pesquisar, favoritar e visualizar detalhes de filmes e séries. O projeto foi desenvolvido utilizando tecnologias modernas para fornecer uma experiência de usuário fluida e interativa.

## 🌐 Link para o Projeto

Você pode acessar o projeto em: [https://movie-life-ml.vercel.app](https://movie-life-ml.vercel.app)

## 🚀 Funcionalidades

- **Pesquisa de Filmes e Séries**: Busque por títulos de filmes e séries diretamente na plataforma.
- **Favoritar Conteúdos**: Adicione seus filmes e séries favoritos à sua conta para fácil acesso.
- **Visualizar Detalhes**: Veja informações detalhadas sobre filmes e séries, incluindo sinopse, elenco, e avaliações.
- **Reset de Senha por E-mail**: Os usuários podem resetar suas senhas utilizando um link enviado por e-mail.
- **Autenticação JWT**: Sistema seguro de autenticação de usuários utilizando JSON Web Tokens (JWT).

## 🛠️ Tecnologias Utilizadas

- **Frontend**:

  - React.js
  - Tailwind CSS
  - React Query

- **Backend**:

  - Node.js
  - Express
  - MongoDB
  - JWT para autenticação
  - Nodemailer para envio de e-mails

- **Outras**:
  - API do The Movie Database (TMDb)

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js instalado
- MongoDB configurado e em execução

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/maatheuus/Movie-Life
   cd movie-life
   ```
2. **Instale as dependências do projeto**:
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente**:
   Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
   ```bash
    MONGODB_URI=sua-uri-do-mongodb
    TMDB_API_KEY=sua-chave-api-do-tmdb
    JWT_SECRET=sua-chave-secreta-jwt
    EMAIL_HOST=seu-host-de-email
    EMAIL_PORT=sua-porta-de-email
    EMAIL_USER=seu-usuario-de-email
    EMAIL_PASS=sua-senha-de-email
   ```
4. **Inicie o servidor**:

```
npm start
```

5. **Acesse o frontend**:
   O frontend estará disponível em http://localhost:5173.

📸 Screenshots

- Página Inicial:
  ![Página Inicial](public\img\home-page.png)

- Página de Detalhes:
  ![Página Inicial](public\img\details-page.png)

- Página de Favoritos:
  ![Página Inicial](public\img\fav-page.png)

- Página de Reset de Senha:
  ![Página Inicial](public\img\reset-pages.png)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
