Para criar um pequeno servidor web que contenha várias rotas, faremos uso do Express, que é um framework para aplicativos web do Node.js. Com ele, podemos criar rotas estáticas e dinâmicas de forma fácil e intuitiva.

Certifique-se de ter o Node.js e o Express instalados em seu computador.

Crie um novo diretório para o projeto e acesse-o no terminal.

Inicialize o npm usando o comando npm init. Siga as instruções para configurar o arquivo package.json para o seu projeto.

Instale o Express usando o comando npm install express.

Crie um arquivo chamado server.js e abra-o em seu editor de código.

No arquivo server.js, importe o módulo express do Node.js e crie um aplicativo Express:

const express = require('express');
const app = express();

Crie rotas para as páginas estáticas usando o método get() do aplicativo Express:

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

// Rota para a página "Sobre"
app.get('/sobre', (req, res) => {
  res.send('Esta é a página "Sobre"!');
});

// Rota para a página "Contato"
app.get('/contato', (req, res) => {
  res.send('Esta é a página "Contato"!');
});

Crie rotas dinâmicas usando placeholders na URL. Para isso, utilize o caractere : seguido do nome da variável a ser passada. É importante ressaltar que essas rotas devem vir após as rotas estáticas, caso contrário, o servidor não irá reconhecer as rotas estáticas corretamente.

// Rota para exibir um perfil de usuário
app.get('/perfil/:nome', (req, res) => {
  res.send(`Bem-vindo ao perfil de ${req.params.nome}!`);
});

// Rota para exibir um artigo
app.get('/artigo/:id', (req, res) => {
  res.send(`Você está lendo o artigo ${req.params.id}!`);
});

Crie rotas com query parameters. Para isso, utilize o objeto query da requisição.

// Rota para exibir um produto
app.get('/produto', (req, res) => {
  const nome = req.query.nome;
  const preco = req.query.preco;
  res.send(`Produto: ${nome}. Preço: R$${preco}`);
});

Finalmente, inicie o servidor chamando o método listen() e especificando a porta em que o servidor estará ouvindo as requisições:

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
