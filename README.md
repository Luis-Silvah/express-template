# Template para criar backends usando express

Este é um projeto apenas de "esqueleto" para você criar seu backend em TypeScript usando express.

## Instalando as dependências

Ao fazer o clone do repositório, basta rodar o comando: 

```
npm install
```
O comando acima instalará todas as dependências que constam no arquivo package.json.

## Iniciando o servidor

Para garantir que seu código esteja funcionando, na raíz do projeto rode o comando: 

```
npm run build
```
Como consequência, será gerado o diretório build constando o arquivo server.js. 

Acesse o diretório onde está o arquivo server.js (build/src) e digite o comando
```
node server.js
```

## Usando o nodemon

Em muitos casos não desejamos a todo momento ficar alterando nosso código e sempre digitando diversos comandos para testar aquilo que estamos fazendo. Pensando nisso, o projeto nodemon resolve esse problema. 

Experimente o comando

```
npm run dev
```

## Lista de exercicios

# EX01 
Criar uma função que verifica se já existe uma conta com aquele email no banco

# EX02
Na rota de criação de contas signUp existe um problema, resolva.

# EX03
Criar uma rota login, que receba os parametros email e senha e que verifique se existe no banco de dados uma conta com aquele email e senha informados. Caso exista devolver codigo 200 http e o texto "sucesso". Caso contrário http 404 e o texto "Usuário e ou senha inválidos"

# EX04
Criar uma rota getAllAccounts que retorne uma lista de contas cadastradas (todas)

##

curl --location --request PUT 'http://localhost:3000/signUp' --header 'name: luis' --header 'email: admin01@gmail.com' --header 'password: 123' --header 'birthdate: 17/11/2004'

curl --location --request GET 'http://localhost:3000/get/accounts'

curl --location --request POST 'http://localhost:3000/login' --header 'email: admin@gmail.com' --header 'password: 123'
