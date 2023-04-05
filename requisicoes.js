/* Para criar um servidor web em Node.js que responda a requisições com diferentes status HTTP de acordo com os parâmetros enviados pelo placeholder, podemos usar a biblioteca Express. Podemos seguir os seguintes passos:

Certifique-se de ter o Node.js e o Express instalados em seu computador.

Crie um novo diretório para o projeto e acesse-o no terminal.

Inicialize o npm usando o comando npm init. Siga as instruções para configurar o arquivo package.json para o seu projeto.

Instale o Express usando o comando npm install express.

Crie um arquivo chamado server.js e abra-o em seu editor de código.

No arquivo server.js, importe o módulo express do Node.js e crie um aplicativo Express: */

const express = require('express');
const app = express();

/* Crie uma rota que receba um parâmetro usando um placeholder.Neste exemplo, usaremos o placeholder:id para receber o valor do parâmetro. */

app.get('/listar/:id', (req, res) => {
  const id = req.params.id;

  // Verifica se o id é igual a 10
  if (id === '10') {
    res.status(200).send('Esta é uma resposta para a rota /listar/10!');
  } else {
    res.status(404).send('Erro 404 - página não encontrada!');
  }
});

/* Na rota, usamos o método params do objeto req para obter o valor do parâmetro id. Depois, verificamos se o valor é igual a 10. Se for, enviamos uma resposta com status 200 e uma string informando que a rota foi encontrada. Se não for, enviamos uma resposta com status 404 informando que a página não foi encontrada.

Finalmente, inicie o servidor chamando o método listen() e especificando a porta em que o servidor estará ouvindo as requisições: */

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

