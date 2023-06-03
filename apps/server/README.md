# backend

Using [fastify](https://www.fastify.io),this template includes:

-   Input validation: `zod`
-   ORM & migration tools: `Prisma`
-   Code linting & styling: `Eslint` + `prettier`

## Commands

Note: Fill in `.env` file (use template from `.env.example`) before starts.

-   `yarn start`: Start application in dev mode
-   `yarn db:migration:generate`: Generate a new migration without applying it to the current database.
-   `yarn db:migration:run`: Apply pending migrations to the current database.
-   `yarn postinstall`: Just generate prisma client library
-   `yarn db:studio`: Interact with database by a web UI
