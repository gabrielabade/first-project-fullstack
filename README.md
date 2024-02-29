<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
# Backend e Frontend - Tela de cadastro

Este projeto consiste em um sistema de cadastros com um backend desenvolvido em Node.js utilizando Express e um frontend em React.

## Backend (Node.js)

O backend do sistema gerencia os cadastros, fornecendo endpoints para criar, visualizar, atualizar e excluir cadastros.

### Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Navegue até a pasta `first-project-node`.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `node index.js` para iniciar o servidor.

### Endpoints

- `GET /order`: Retorna todos os dados cadastrados.
- `GET /order/:id`: Retorna um cadastro específico com o ID fornecido.
- `POST /order`: Cria um novo cadastro.
- `PUT /order/:id`: Atualiza um cadastro existente com o ID fornecido.
- `DELETE /order/:id`: Exclui um cadastro existente com o ID fornecido.
- `PATCH /order/:id`: Atualiza o status de um cadastro existente com o ID fornecido.

### Tecnologias Utilizadas

- Node.js
- Express
- UUID
- Cors

## Frontend (React)

O frontend do sistema permite adicionar novos pedidos e visualizar os pedidos existentes.

### Instalação

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone este repositório.
3. Navegue até a pasta `first-project-react`.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

### Funcionalidades

- Adicionar novos usuarios com nome do cliente e idade.
- Visualizar todos os dados cadastrados.
- Excluir cadastros existentes.

### Tecnologias Utilizadas

- React
- React Router DOM
- Axios

### Demontração 
<img src="./assets/exemplo-home.png" alt="exemplo-home" width="225px">
<img src="./assets/exemplo-users.png" alt="exemplo-users" width="225px">