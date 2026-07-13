import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function AdminPartnerView({ params }: Props){
  const id = Number(params.id)
  const p = await prisma.partner.findUnique({ where: { id } })
  if(!p) return <div className="p-6">Partner not found</div>

  return (
    <section>
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold">{p.name}</h1>
        <div className="mt-4">Type: {p.type}</div>
        <div className="mt-4">Website: {p.website}</div>
      </div>
    </section>
  )
}
