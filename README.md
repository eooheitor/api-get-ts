# Coworking API

Uma API simples desenvolvida em **Node.js + TypeScript** para consultar espaços disponíveis em um ambiente de coworking.

## Pré-requisitos

Para executar o projeto, você precisa ter instalado:

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Como executar o projeto

### 1. Iniciar a API

Para construir e iniciar o container da aplicação, execute o seguinte comando no diretório raiz do projeto:

```bash
docker-compose up --build
```

Após iniciar, a API estará disponível em:

```bash
http://localhost:3000/espacos_disponiveis_coworking
```

Acesse este endpoint utilizando um cliente de API (como Postman ou cURL) para consultar os espaços disponíveis.

### 2. Executar testes unitários

Para rodar os testes unitários, utilize o comando abaixo:

```bash
docker-compose run --rm test
```

Este comando executa os testes dentro de um container isolado e remove o container após a execução.