1- Crie um arquivo chamado server.js.
2- No arquivo server.js, importe o módulo http do Node.js usando o seguinte código:

const http = require('http');

3- Crie um servidor HTTP usando o método createServer() do módulo http e defina a função de retorno de chamada (callback) que será executada cada vez que uma requisição HTTP for recebida:

const server = http.createServer((req, res) => {
  // Aqui você pode escrever a lógica do seu servidor
});

4- Dentro da função de retorno de chamada, defina a resposta que será enviada ao cliente, por exemplo:

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

5- Finalmente, inicie o servidor chamando o método listen() e especificando a porta em que o servidor estará ouvindo as requisições:

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});


6 - Para rodar o servidor, abra o terminal na pasta onde o arquivo server.js está localizado e execute o comando:

node server.js

Isso iniciará o servidor na porta especificada (neste caso, 3000).

Para testar o servidor, abra um navegador da web e digite http://localhost:3000 na barra de endereço. Você deve ver a mensagem "Hello, World!" exibida na página.

Você também pode testar o servidor usando uma ferramenta como o Postman, enviando requisições HTTP para o endereço http://localhost:3000 e verificando as respostas recebidas.




