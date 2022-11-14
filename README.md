# Despesas - Back-end - Api

# 🔗 Despesas
<p>🚀  Aplicação voltada para administração de despesas</p>

# Status da Aplicação
<p>🔥 Aplicação Finalizada</p>

# Features
- Cadastro de Usuário
- Atualização de Email
- Atualização de Senha
- Recuperação de Senha
- Exclusão de Usuário
- Criação de Despesas
- Atualização de Despesas
- Leitura de Despesas
- Exclusão de Despesas

# Tecnologias
- Node
- Typescript
- Nodemailer
- MongoDB
- Jest

# Execução

Para executar o projeto você deve ter o docker, o node e o pacote yarn instalados, após clonar o projeto, use o exemplo para definir as variáveis de ambiente e digite os seguintes comandos:
```sh
 yarn
```
```sh
 docker-compose up -d
```

Se quiser usar o projeto sem volumes, você não precisa ter instalado o node e nem o pacote yarn, somente retire a tag volumes do arquivo docker-compose.yml e use o exemplo para definir as variáveis de ambiente, depois rode o seguinte comando:
```sh
 docker-compose up -d
```
# Teste

Para executar os testes, rode o seguinte comando:
```sh
docker exec -i api-despesas yarn test
```
