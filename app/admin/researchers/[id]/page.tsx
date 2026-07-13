import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function AdminResearcherView({ params }: Props){
  const id = Number(params.id)
  const r = await prisma.researcher.findUnique({ where: { id } })
  if(!r) return <div className="p-6">Researcher not found</div>

  return (
    <section>
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold">{r.name}</h1>
        <div className="mt-2 text-slate-600">{r.title}</div>
        <div className="mt-4">{r.bio}</div>
        <div className="mt-4"><a href={`/admin/researchers/${id}/edit`} className="text-primary">Edit</a></div>
      </div>
    </section>
  )
}
