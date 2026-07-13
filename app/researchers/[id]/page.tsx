import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function ResearcherPage({ params }: Props){
  const id = Number(params.id)
  const r = await prisma.researcher.findUnique({ where: { id } })
  if(!r) return <div className="p-6">Researcher not found</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="h-56 w-56 bg-slate-100 rounded-full overflow-hidden">{r.photo ? <img src={r.photo} alt={r.name} className="w-full h-full object-cover"/> : null}</div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold">{r.name}</h1>
            <div className="text-sm text-slate-500">{r.title}</div>
            <div className="mt-4 text-slate-700">{r.bio}</div>
            {r.email && <div className="mt-4 text-sm">Email: <a href={`mailto:${r.email}`} className="text-primary">{r.email}</a></div>}
          </div>
        </div>
      </div>
    </section>
  )
}
