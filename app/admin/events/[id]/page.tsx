import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function AdminEventView({ params }: Props){
  const id = Number(params.id)
  const e = await prisma.event.findUnique({ where: { id } })
  if(!e) return <div className="p-6">Event not found</div>

  return (
    <section>
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold">{e.title}</h1>
        <div className="mt-2 text-slate-600">{new Date(e.startAt).toLocaleString()}</div>
        <div className="mt-4 bg-white p-4 rounded-md">{e.description}</div>
        <div className="mt-4"><a href={`/admin/events/${id}/edit`} className="text-primary">Edit</a></div>
      </div>
    </section>
  )
}
