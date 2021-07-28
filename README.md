# RESTFUL-API-De-Usuarios

Projeto gerado durante o curso de Javascript da HCode Treinamentos.

Link heroku:

API REST que permite GET, POST, PUT e DELETE. Esta aplicação tem como fim treinamento da linguagem Javascript e NODEjs.

## Como rodar

### Instalando dependências
Utilizando o gerenciador de pacotes `NPM` execute o seguinte comando:
```
npm install
```

### Excutando servidor
Para executar o servidor da maneira convencional sem o carregamento automatico de novas atualizações no projeto execute:
```
npm start
```

Para executar o servidor com Nodemon com o carregamento automatico de novas atualizações no projeto execute:
```
npm run dev
```

## Rotas
Obter todos os usuários
```
Method: GET URL: http://localhost:4000/users
```
Exemplo de resultado:
```
{
    "users":[{"_name":"Valdecir","_gender":"M","_birth":"1993-08-11","_country":"Brazil","_email":"valdecirlucianoti@gmail.com","_password":"1234","_photo":"data:image/jpeg;base64 ...",_admin":true,"_register":"2021-07-28T17:41:06.772Z","_id":"1cABp3LmFx21Oqh7}]
}
```

Cadastrar um novo usuário:
```
Method: POST URL: http://localhost:4000/users

```

Exemplo de resultado:
```
{"_name":"novoNome","_gender":"novoSexo","_birth":"novaData","_country":"novoPais","_email":"novoEmail","_password":"novaSenha","_photo":"data:image/jpeg;base64 novaFoto",_admin":novaInformação,"_register":"novaDataGeristro","_id":"novoID}
```

Obter dados de um usuário:
```
Method: POST URL: http://localhost:4000/users/:id
```

Editar um usuário:
```
Method: PUT URL: http://localhost:4000/users/:id
```

Editar um usuário:
```
Method: DELETE URL: http://localhost:4000/users/:id
```
### Esta aplicação utiliza: 
Javascript e NODEjs
