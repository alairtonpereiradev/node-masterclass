# Instalar o nodejs

npm install nodejs
node -v

# Instalar o npm

curl -L https://npmjs.org/install.sh | sudo sh

# Criar um projeto

npm init -y

# Instalar o typescript

# Essa instalação so será util em ambiente de desenvolvimento

npm i typescript -D

npm i @types/node -D

# configurar o typescript no projeto

# cria o arquivo tsconfig.json

Altere o target": "es2020", para a versão mais recente 

npx tsc --init

# Instalar o tsx converte automaticamente ts para js.

npm i tsx -D

Parametro -D-> significa colocar em dev

# Alterar no package.json

"scripts": {
    "dev": "tsx watch src/server.ts"

# Iniciar o servidor

npm run dev

# Instalar o framework fastify

npm i fastify

# Ferramenta de padronização para codificação

npm install eslint -D

# pesonalização rocketseat

npm i @rocketseat/eslint-confg -D

# corrigi erros de identação no codigo

lint": "eslint src --ext .ts --fix"

npm i lint

# Prisma + SQLite

# Instalação do prisma (importante para migração de SGDB)

npm i prisma -D

# help CLI

npx prisma -h

# Auto Indentação

npm i -D prettier-plugin-prisma

# Criar o banco de dados local SQLite

npx prisma init --datasource-provider SQLite

# cria as tabelas no schema.prisma

model {

}

# rode o comando para criar a estrutura do banco de dados

npx prisma migrate dev

# Resetar o banco de dados

npx prisma migrate reset

# visualizar o banco de dados com o prisma

npx prisma studio

# Acessar o banco de dados de dentro do servidor

npm i @prisma/client

# Validação de Identificador(ID)

npm i zod

# instalar plugins cors

Tecnica de segurança para determiar quais endereços podem acessar o servidor.

npm i @fastify/cors



