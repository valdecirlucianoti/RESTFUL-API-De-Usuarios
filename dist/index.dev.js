"use strict";

//este comando carrega o modulo HTTP
var express = require('express');

var app = express();
app.get("/", function (req, res) {
  console.log('URL:', req.url);
  console.log('METHOD:', req.method);
  res.statusCode = 200; //status de que deu tudo certo;

  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Olá</h1>');
});
app.get("/users", function (req, res) {
  console.log('URL:', req.url);
  console.log('METHOD:', req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({
    users: {
      name: "valdecir",
      email: "valdecir@gmail.com",
      id: 1
    }
  });
});
var PORTA = 3000;
var IP = '127.0.0.1';

var callback = function callback() {
  console.log("servidor rodando");
}; //manda o nosso servidor ficar escutando as chamadas vindas da porta 3000


app.listen(PORTA, IP, callback);