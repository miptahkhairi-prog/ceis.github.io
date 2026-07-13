import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function AdminNewsView({ params }: Props){
  const id = Number(params.id)
  const n = await prisma.news.findUnique({ where: { id } })
  if(!n) return <div className="p-6">News not found</div>

  return (
    <section>
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold">{n.title}</h1>
        <div className="mt-2 text-slate-600">{n.category} • {n.published ? 'Published' : 'Draft'}</div>
        <div className="mt-4 bg-white p-4 rounded-md">{n.content}</div>
        <div className="mt-4"><a href={`/admin/news/${id}/edit`} className="text-primary">Edit</a></div>
      </div>
    </section>
  )
}
