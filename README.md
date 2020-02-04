# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```


### para voltar toda migration fazer isso apenas se nao foi pro git ainda
adonis migration:rollback

### Criando um controller
adonis make:controller User

### Criando model, migration e controller
adonis make:model Project -m -c

### Listar rotas

 adonis route:list

### Start server
adonis serve --dev

### Criando um validator

adonis make:validator User


### Criando um Exception handler ehandler

adonis make:ehandler


### Criando um job com o kue
adonis make:job NewTaskMail


### Escutando adonis kue
adonis kue:listen
