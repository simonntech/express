const express = require('express');
const app = express();

// rota, lembrar de usar arrow function
app.get('/', (req, res) => {
    res.send('<h3> Hello World! 🐈‍⬛</h3>');
});

app.listen(3000, function(err) { //tratamento de erro na inicialização do servidor
    // não se esquecer de tratar o erro caso não inicie o servidor
    if (err) {
        console.error('Erro ao conectar ao servidor: ', err);
    } else {
        console.log('Servidor rodando na porta 3000');
    }
})