# Fullstack Template

## Tech Stack

Common

- TypeScript
- ESLint
- Prettier

Backend

- Prisma
- Fastify
- PostgreSQL
- Zod

Frontend

- React
- Next.js
- Tailwind CSS

## Commands

Note: Fill in `.env` file (use template from `.env.example`) before starts.

- `yarn api:dev`: Start the API development server.
- `yarn api:type-check`: Perform type checking for the API.
- `yarn web:lint`: Run linting for the web application code.
- `yarn web:dev`:Start the development server for the web application.
- `yarn web:build`:Build the web application for production.
- `yarn web:start`:Start the production server for the web application.

## Project structure

### apps/

- **server**: This directory contains the implementation of the API server.

- **view**: This directory contains the frontend implementation of the application.

### packages/

Internal packages are packages which are only intended to be used inside your monorepo.
