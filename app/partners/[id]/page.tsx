import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function PartnerPage({ params }: Props){
  const id = Number(params.id)
  const p = await prisma.partner.findUnique({ where: { id } })
  if(!p) return <div className="p-6">Partner not found</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-bold">{p.name}</h1>
        {p.logo && <div className="mt-4 w-48 h-24 overflow-hidden"><img src={p.logo} alt={p.name} className="w-full h-full object-contain"/></div>}
        <div className="mt-4 text-slate-700">{p.type}</div>
        {p.website && <div className="mt-2"><a href={p.website} className="text-primary">{p.website}</a></div>}
      </div>
    </section>
  )
}
