import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function EventPage({ params }: Props){
  const id = Number(params.id)
  const ev = await prisma.event.findUnique({ where: { id } })
  if(!ev) return <div className="p-6">Event not found</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold">{ev.title}</h1>
        <p className="text-sm text-slate-500 mt-2">{new Date(ev.startAt).toLocaleString()} {ev.endAt ? `— ${new Date(ev.endAt).toLocaleString()}` : ''}</p>
        <div className="mt-4 text-slate-700">{ev.description}</div>
        {ev.location && <div className="mt-4 text-sm">Location: {ev.location}</div>}
      </div>
    </section>
  )
}
