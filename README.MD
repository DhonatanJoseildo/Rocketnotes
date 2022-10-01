# Projeto Rocketnotes

## Linguagem e Tecnologias usadas

- Javascript - nodeJS - express
- Banco de dados SQLITE
- knex
- bcrypt

- Imsomnia para melhor performance na face de desenvolvimento usando o nodeJS

- para gerar a tabela no banco de dados através do knex devemos
usar ( npx migrate:latest)
- para gerar a migration devemos usar 
npx knex migrate:make nomedoarquivo
- usamos middleware de tratamento de exceções

## Dependencias

- npm install bcryptjs --save
- npm install nodemon --save-dev
- npm install -g npm
- npm install express --save
- npm install express-async-errors --save
- npm install sqlite3 sqlite --save
- npm install knex --save

### Comandos knex

- npx knex migrate:make createNotes
- npx knex migrate:latest
- npx knex migrate:make createTags
- npx knex migrate:make createLinks