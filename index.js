const express = require('express');
const app = express();

app.listen(3000, function(err) { //tratamento de erro na inicialização do servidor
    // não se esquecer de tratar o erro caso não inicie o servidor
    if (err) {
        console.error('Erro ao conectar ao servidor: ', err);
    } else {
        console.log('Servidor rodando na porta 3000');
    }
})