const express = require ('express');
const routes = require('./src/routes');
const server = express ();
// pasta public onde fica style e img
server.use(express.static('public'));

//configurar a entrada de dados pelo corpo da requisicao
server.use(express.json());
server.use(express.urlencoded({ extended: true}));

// configurar o motor javascript no html
server.set('view engine', 'ejs');
server.set('views', './src/app/views')
// extrair as 
server.use(routes);
// porta do servidor
server.listen(3333, function() {
    console.log('servidor ativo!')
});