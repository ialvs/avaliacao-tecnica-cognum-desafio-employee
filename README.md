# avaliacao-tecnica-cognum-desafio-employee

Essa é uma API RESTful escrita em Javascript (Express) que utiliza um banco SQL (PostgreSQL) e o query builder Knex para gerenciar informações de employees (empregados). Com ela, é possível criar, atualizar, remover e listar os employees e realizar requisições a uma API de terceiros, [a Random User Generator](https://randomuser.me/) para obter dados que alimentarão o banco, mantendo o registro dos empregados.

Projeto desenvolvido como parte da avaliação técnica da Cognum, referente aos desafios 1, 2 e 3.

## Instalação

Antes de tudo, certifique-se de ter o Node.js e o npm instalados em sua máquina.

1. Clone o repositório para sua máquina:

```
git clone git@github.com:ialvs/avaliacao-tecnica-cognum-desafio-employee.git
```

2. Acesse a pasta da API:

```
cd avaliacao-tecnica-cognum-desafio-employee
```

3. Instale as dependências:

```
npm install
```

4. Execute o código SQL abaixo num banco de dados PostgreSQL:

```
CREATE DATABASE employee;

CREATE TABLE IF NOT EXISTS employee(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL
);
```

5. Crie um arquivo .env e adicione as variáveis:

```
DB_HOST = host do banco PostgreSQL
DB_PORT = porta de acesso do banco
DB_USER = user do banco
DB_PASSWORD = senha do banco
DB_DATABASE = employee
PORT = porta de acesso do servidor (opcional)
```

6. Inicie a aplicação:

```
npm start
```

7. Teste os endpoints com um client HTTP.

## Deploy

Deploy da API realizado na plataforma [Cyclic](https://www.cyclic.sh/) e do banco PostgreSQL na [ElephantSQL](https://www.elephantsql.com/).

## Uso

A API utiliza a porta 3000 por padrão. As rotas disponíveis são:

<p>GET /hello - Retorna a mensagem "Hello, Cognum!"</p>
<p>GET /employee - Retorna uma lista com todos os employee.</p>
<p>GET /employee/id - Retorna as informações de um employee a partir do id dele.</p>
<p>POST /employee - Cria um novo employee.</p>
<p>PUT /employee/id - Atualiza as informações de um employee a partir do id dele.</p>
<p>DELETE /employee/id - Deleta um employee a partir do id dele.</p>
<p>GET /populate - Recebe as informações de 10 pessoas criadas na API de terceiros e as insere no banco como employee.</p>

## Tecnologias utilizadas

- Javascript: Linguaguem de programação executada no runtime NodeJS.
- Express: Framework JavaScript minimalista com ferramentas para criação de aplicações Web do lado do servidor.
- PostgreSQL: Banco de dados SQL.
- Knex: Construtor de querys SQL para simplificar as interações com banco de dados.
- Axios: Biblioteca que simplifica a realização de requisições HTTP.
- Eslint, Prettier e husky: Ferramentas de correção e formatação de código, realizando a padronização a cada commit realizado.
- Dotenv: Biblioteca para controle de variáveis de ambiente, acrescentando portabilidade e segurança ao projeto.
- Nodemon: Ferramenta de desenvolvimento que propicia um hot reload da aplicação.

## Organização das pastas

- Raiz é composta de arquivos de configuração e do git.
- Raiz/src é composta dos arquivos de código:
    - db: contém o arquivo de conexão Knex e o dump do banco SQL.
    - employee contém os arquivos relacionados ao recurso:
        - .controller, recebem e gerenciam as requisições HTTP.
        - .middleware, validam e fazem operações nas requisições HTTP.
        - .routes, relaciona as rotas com os respectivos controllers e middlewares.
        - .service funções responsáveis por execuções de querys no banco e interação com API de terceiros.
    - index: entry point, instacia o servido, atribui uma porta e escuta requisições dela
    - server: concentra as configurações gerais do servidor.
