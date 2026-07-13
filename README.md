# CEIS Website

Initial scaffold for CENTER OF EASTERN INDONESIAN STUDIES (CEIS).

Tech stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Prisma(MySQL), NextAuth, Framer Motion.

Quick start

1. Copy .env.example to .env and fill values
2. Start MySQL (or use docker-compose): docker-compose up -d
3. Install deps: npm install
4. Generate Prisma client: npx prisma generate
5. Run migrations: npx prisma migrate dev --name init
6. Seed: npm run seed
7. Dev: npm run dev

See prisma/ for schema and seed.
