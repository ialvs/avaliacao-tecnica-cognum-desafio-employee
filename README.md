# avaliacao-tecnica-cognum-desafio-employee

Essa é uma API RESTful escrita em Javascript (Express) que utiliza um banco SQL (PostgreSQL) e o query builder Knex para gerenciar informações de employees (empregados). Com ela, é possível criar, atualizar, remover e listar os employees e realizar requisições a uma API de terceiros, [a Random User Generator](https://randomuser.me/) para obter dados que alimentarão o banco, mantendo o registro dos empregados.

## Instalação

Antes de tudo, certifique-se de ter o Node.js e o npm instalados em sua máquina.

1. Clone o repositório para sua máquina:
`git git@github.com:ialvs/avaliacao-tecnica-cognum-desafio-employee.git `

2. Acesse a pasta da API:
`cd avaliacao-tecnica-cognum-desafio-employee`

3. Instale as dependências:
`npm install`

4. Crie um arquivo .env e adicione as variáveis:

``

5. Inicie a aplicação:
`npm start`

6. Teste os endpoints com um client HTTP

## Uso

## Tecnologias utilizadas

- Javascript: Linguaguem de programação executada no runtime NodeJS.
- Express: Framework JavaScript minimalista que com ferramentas para criação de aplicações Web do lado do servidor.
- PostgreSQL: Banco de dados SQL.
- Knex: Construtor de querys SQL para simplificar as interações com banco de dados.
