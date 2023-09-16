require('dotenv').config({path: 'variaveis.env'});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require("./routes");
const PORT = 3000;

const server = express();
server.use(cors());
//server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json())

server.use('/api', routes)


server.listen(PORT, () => {
    console.log(
        'Servidor rodando em: http://localhost:'+ PORT
    );

});