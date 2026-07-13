import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function AdminPublicationView({ params }: Props){
  const id = Number(params.id)
  const pub = await prisma.publication.findUnique({ where: { id } })
  if(!pub) return <div className="p-6">Publication not found</div>

  return (
    <section>
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold">{pub.title}</h1>
        <div className="mt-4">Type: {pub.type}</div>
        <div className="mt-4">Year: {pub.year}</div>
        <div className="mt-6 bg-white p-4 rounded-md">{pub.abstract}</div>
        <div className="mt-4"><a href={`/admin/publications/${id}/edit`} className="text-primary">Edit</a></div>
      </div>
    </section>
  )
}
