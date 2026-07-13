import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function PublicationPage({ params }: Props){
  const id = Number(params.id)
  const pub = await prisma.publication.findUnique({ where: { id } })
  if(!pub) return <div className="p-6">Publication not found</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold">{pub.title}</h1>
        <p className="text-sm text-slate-600 mt-2">{pub.year ?? ''} • {pub.type}</p>
        <div className="mt-6 bg-white p-6 rounded-md shadow-sm">{pub.abstract}</div>
        {pub.pdf && <a href={pub.pdf} className="text-primary mt-4 inline-block">Download PDF</a>}
      </div>
    </section>
  )
}
