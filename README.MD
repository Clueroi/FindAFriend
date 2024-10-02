
## RFs

- [x] Deve ser possível cadastrar um usuário
- [x] Deve ser possível se cadastrar como uma ORG
- [x] Deve ser possível cadastrar um pet
- [x] Deve ser possível realizar login como um usuário
- [x] Deve ser possível realizar login como uma ORG
- [x] Deve ser possível visalizar detalhes do perfil do Usuário e das ORGs
- [x] Deve ser possível visualizar detalhes de um pet para adoção
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [x] Deve ser possível filtrar pets por suas características


## RNs

- [x] Para listar os pets, obrigatoriamente precisamos informar a cidade
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp
- [x] Um pet deve estar ligado a uma ORG
- [x] Todos os filtros, além da cidade, são opcionais
- [x] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

## RNFs

- [x] A senha do usário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um postgres
- [x] Os itens listados precisam estar limitados a 20 itens por página
- [x] Usuário e oORG identificados por um JWT