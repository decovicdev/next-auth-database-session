# Nextjs + NextAuth + Prisma

This repository combines `Next.js` and `NextAuth.js` with various authentication providers (**Credentials**, **Facebook**, **Google**) and session management for both **App** and **Pages** Routers.

Try demo https://next-auth-database-session-app.vercel.app/

## Features
- 🧙‍♂️ type safe with TypeScript
- ⚡ Full-stack React with Next.js (app/pages) routers
- ⚡ Database with Prisma
- ⚡ Monorepo with Turborepo
- 🔐 Authorization using [next-auth](https://next-auth.js.org/) (v4/v5)
- 🔐 Zod Validation
- 🎨 ESLint


## Using this example

Run the following command:

```sh
git clone https://github.com/decovicdev/next-auth-database-session.git
```

## What's inside?

This turborepo includes the following packages/apps:

### Apps and Packages

- `app-dir-v4`: a [Next.js](https://nextjs.org/) app (app directory) + [NextAuth:v4](https://authjs.dev/)
- `app-dir-v5`: a [Next.js](https://nextjs.org/) app (app directory) + [NextAuth:v5](https://authjs.dev/)
- `pages-dir-v4`: a [Next.js](https://nextjs.org/) app (pages directory) + [NextAuth:v4](https://authjs.dev/)
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `validation`: `zod` schemas to validate and parse user input
- `database`: [Prisma](https://prisma.io/) ORM wrapper to manage & access your database
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Prisma](https://prisma.io/) for database ORM
- [Docker Compose](https://docs.docker.com/compose/) for local database

### Database

We use [Prisma](https://prisma.io/) to manage & access our database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, use [`docker-compose.yml`](https://docs.docker.com/compose/) file to deploy a `PostgresSQL` server locally with a new database named `turborepo` (To change this update the `POSTGRES_DB` environment variable in the `docker-compose.yml` file):

```bash
cd next-auth-database-session
docker-compose up -d
```

Once deployed you will need to copy the `.env.example` file to `.env` in order for Prisma to have a `DATABASE_URL` environment variable to access.

```bash
cp .env.example .env
```

If you added a custom database name, or use a cloud based database, you will need to update the `DATABASE_URL` in your `.env` accordingly.

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Prisma Migrate](https://www.prisma.io/migrate):

```bash
npx prisma migrate dev
```

If you need to push any existing migrations to the database, you can use either the Prisma db push or the Prisma migrate deploy command(s):

```bash
pnpm run db:push

# OR

pnpm run db:migrate:deploy
```

For further more information on migrations, seeding & more, we recommend reading through the [Prisma Documentation](https://www.prisma.io/docs/).

### Build

To build all apps and packages, run the following command:

```bash
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Next.js](https://nextjs.org/)
- [NextAuth](https://authjs.dev/)
- [Turborepo](https://turbo.build/repo/docs/)
- [Prisma](https://prisma.io/)
