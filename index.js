const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
//app.use(expressValidator()); //não esta reconhecendo a validação do express

consign().include('routes').include('utils').into(app);

let PORTA = 4000;
let IP = '127.0.0.1';
let callback = () => {   
    console.log("servidor rodando");
};

//manda o nosso servidor ficar escutando as chamadas vindas da porta 3000
app.listen(PORTA, IP, callback);