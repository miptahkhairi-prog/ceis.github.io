# Pull Request: feature/initial-scaffold -> main

This branch contains the initial scaffold and the first admin/dashboard iteration.

What this PR includes:

- Next.js 15 App Router scaffold (TypeScript)
- Tailwind CSS, Inter & Poppins
- Prisma schema + MySQL docker-compose
- Admin layout, sidebar, dashboard skeleton
- NextAuth route (credentials + Google provider skeleton)
- Prisma client util, Cloudinary upload util and upload route
- Admin Researchers page + API endpoints (GET/POST)
- Seed script updated (passwords hashed, more sample data)
- Dockerfile, docker-compose, README, .env.example

Checklist
- [ ] Review environment variables and secrets
- [ ] Run prisma migrate & seed (see README)
- [ ] Test admin login (credentials)
- [ ] Configure Cloudinary keys

Notes
- Password seeded as 'CHANGE_ME' hashed – replace via reset in production
- I recommend enabling Google OAuth after setting CLIENT_ID/SECRET
