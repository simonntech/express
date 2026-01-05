const express = require('express');
const app = express();
// rota, lembrar de usar arrow function
app.get('/', (req, res) => {
    res.send('Hello World! 🐈‍⬛');
});

app.get('/blog', (req, res) => {
    res.send('Bem-vindo ao meu blog!');
});

app.get('/ola/:nome/:empresa', (req, res) => {
    //pegando por parâmetro
    const nome = req.params.nome;
    const empresa = req.params.empresa;
    res.send(`😁 Olá ${nome} ! Empresa: ${empresa}`);
});

app.listen(3000, function(err) { //tratamento de erro na inicialização do servidor
    // não se esquecer de tratar o erro caso não inicie o servidor
    if (err) {
        console.error('Erro ao conectar ao servidor: ', err);
    } else {
        console.log('Servidor rodando na porta 3000');
    }
})