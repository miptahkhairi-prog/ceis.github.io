import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function AdminGalleryView({ params }: Props){
  const id = Number(params.id)
  const g = await prisma.gallery.findUnique({ where: { id } })
  if(!g) return <div className="p-6">Media not found</div>

  return (
    <section>
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold">{g.caption ?? 'Media'}</h1>
        <div className="mt-4">Type: {g.type}</div>
        <div className="mt-6 bg-white p-4 rounded-md">
          {g.type?.startsWith('image') ? <img src={g.file} alt={g.caption ?? 'media'} className="w-full h-auto" /> : <a href={g.file}>Download</a>}
        </div>
      </div>
    </section>
  )
}
