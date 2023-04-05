1-Para criar um servidor Node.js que recebe requisições HTTP GET e POST usando o Express e rodar na porta 8080, siga as etapas abaixo:

2-Certifique-se de ter o Node.js e o Express instalados em seu computador.

3-Crie um novo diretório para o projeto e acesse-o no terminal.

4-Inicialize o npm usando o comando npm init. Siga as instruções para configurar o arquivo package.json para o seu projeto.

5-Instale o Express usando o comando npm install express.

6-Crie um arquivo chamado server.js e abra-o em seu editor de código.

7-No arquivo server.js, importe o módulo express do Node.js e crie um aplicativo Express:

const express = require('express');
const app = express();

8-Crie rotas para os métodos HTTP GET e POST usando o método get() e post() do aplicativo Express:

// Rota para o método HTTP GET
app.get('/', (req, res) => {
  res.send('Requisição GET recebida');
});

// Rota para o método HTTP POST
app.post('/', (req, res) => {
  res.send('Requisição POST recebida');
});

Finalmente, inicie o servidor chamando o método listen() e especificando a porta em que o servidor estará ouvindo as requisições:

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
O código completo deve ficar assim:

const express = require('express');
const app = express();

// Rota para o método HTTP GET
app.get('/', (req, res) => {
  res.send('Requisição GET recebida');
});

// Rota para o método HTTP POST
app.post('/', (req, res) => {
  res.send('Requisição POST recebida');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

Para rodar o servidor, abra o terminal na pasta onde o arquivo server.js está localizado e execute o comando:

node server.js
Isso iniciará o servidor na porta especificada (neste caso, 8080).

Para testar o servidor, você pode enviar requisições GET e POST para http://localhost:8080 usando uma ferramenta como o Postman ou fazendo uma requisição através de um formulário HTML.