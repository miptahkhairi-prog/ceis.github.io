import { PrismaClient } from '@prisma/client'
import { hashPassword } from '@/lib/hash'

const prisma = new PrismaClient()

async function main(){
  console.log('Seeding...')
  const adminRole = await prisma.role.upsert({ where: { name: 'admin' }, update: {}, create: { name: 'admin', description: 'Administrator' } })
  const hashed = await hashPassword('CHANGE_ME')
  await prisma.user.upsert({ where: { email: 'admin@example.com' }, update: { name: 'Admin CEIS', roleId: adminRole.id, password: hashed }, create: { email: 'admin@example.com', name: 'Admin CEIS', password: hashed, roleId: adminRole.id } })

  await prisma.researcher.createMany({ data: [
    { name: 'Dr. A. Researcher', title: 'Senior Fellow', bio: 'Expert on Eastern Indonesia', email: 'a@ceis.id' },
    { name: 'Dr. B. Scholar', title: 'Researcher', bio: 'Focus on culture and society', email: 'b@ceis.id' },
    { name: 'Dr. C. Analyst', title: 'Research Fellow', bio: 'Policy and governance', email: 'c@ceis.id' },
    { name: 'Dr. D. Cultural', title: 'Associate', bio: 'Cultural studies specialist', email: 'd@ceis.id' },
    { name: 'Dr. E. Enviro', title: 'Researcher', bio: 'Environment and sustainability', email: 'e@ceis.id' }
  ]})

  await prisma.publication.createMany({ data: [
    { title: 'Report on Eastern Indonesia Development', year: 2024, type: 'REPORT' },
    { title: 'Working Paper: Digital Society in Eastern Indonesia', year: 2023, type: 'WORKING_PAPER' }
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
