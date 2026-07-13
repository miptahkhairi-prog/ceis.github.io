import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
  console.log('Seeding...')
  const adminRole = await prisma.role.upsert({ where: { name: 'admin' }, update: {}, create: { name: 'admin', description: 'Administrator' } })
  const user = await prisma.user.upsert({ where: { email: 'admin@example.com' }, update: {}, create: { email: 'admin@example.com', name: 'Admin CEIS', password: 'CHANGE_ME', roleId: adminRole.id } })

  await prisma.researcher.createMany({ data: [
    { name: 'Dr. A. Researcher', title: 'Senior Fellow', bio: 'Expert on Eastern Indonesia', email: 'a@ceis.id' },
    { name: 'Dr. B. Scholar', title: 'Researcher', bio: 'Focus on culture and society', email: 'b@ceis.id' }
  ]})

  console.log('Seeding finished')
}

main()
  .catch((e)=>{
    console.error(e)
    process.exit(1)
  })
  .finally(async()=>{
    await prisma.$disconnect()
  })
