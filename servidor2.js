/* Para criar um código Node.JS usando a biblioteca Express que responda a quatro tipos de requisições diferentes, podemos seguir os seguintes passos:

Certifique-se de ter o Node.js e o Express instalados em seu computador.

Crie um novo diretório para o projeto e acesse-o no terminal.

Inicialize o npm usando o comando npm init. Siga as instruções para configurar o arquivo package.json para o seu projeto.

Instale o Express usando o comando npm install express.

Crie um arquivo chamado server.js e abra-o em seu editor de código.

No arquivo server.js, importe o módulo express do Node.js e crie um aplicativo Express: */

const express = require('express');
const app = express();

/* Crie rotas para cada tipo de requisição que deseja receber usando o método get() do aplicativo Express: */

// Rota para requisições GET
app.get('/', (req, res) => {
  res.send('Esta é uma resposta para uma requisição GET!');
});

// Rota para requisições POST
app.post('/', (req, res) => {
  res.send('Esta é uma resposta para uma requisição POST!');
});

// Rota para requisições PUT
app.put('/', (req, res) => {
  res.send('Esta é uma resposta para uma requisição PUT!');
});

// Rota para requisições DELETE
app.delete('/', (req, res) => {
  res.send('Esta é uma resposta para uma requisição DELETE!');
});

/* Finalmente, inicie o servidor chamando o método listen() e especificando a porta em que o servidor estará ouvindo as requisições: */

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
