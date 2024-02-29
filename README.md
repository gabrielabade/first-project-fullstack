# Backend e Frontend - Sistema de Pedidos

Este projeto consiste em um sistema de pedidos com um backend desenvolvido em Node.js utilizando Express e um frontend em React.

## Backend (Node.js)

O backend do sistema gerencia pedidos, fornecendo endpoints para criar, visualizar, atualizar e excluir pedidos.

### Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório `backend-node`.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `node index.js` para iniciar o servidor.

### Endpoints

- `GET /order`: Retorna todos os pedidos cadastrados.
- `GET /order/:id`: Retorna um pedido específico com o ID fornecido.
- `POST /order`: Cria um novo pedido.
- `PUT /order/:id`: Atualiza um pedido existente com o ID fornecido.
- `DELETE /order/:id`: Exclui um pedido existente com o ID fornecido.
- `PATCH /order/:id`: Atualiza o status de um pedido existente com o ID fornecido.

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
3. Navegue até o diretório `frontend`.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

### Funcionalidades

- Adicionar novos pedidos com nome do cliente e idade.
- Visualizar todos os pedidos cadastrados.
- Excluir pedidos existentes.

### Tecnologias Utilizadas

- React
- React Router DOM
- Axios
