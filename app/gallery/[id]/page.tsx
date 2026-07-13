import prisma from '@/lib/prisma'

interface Props { params: { id: string } }

export default async function GalleryItemPage({ params }: Props){
  const id = Number(params.id)
  const item = await prisma.gallery.findUnique({ where: { id } })
  if(!item) return <div className="p-6">Media not found</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-bold">{item.caption ?? 'Media'}</h1>
        <div className="mt-4 bg-white rounded-md shadow-sm overflow-hidden">
          {item.type?.startsWith('image') ? <img src={item.file} alt={item.caption ?? 'media'} className="w-full h-auto" /> : <a href={item.file} className="block p-6">Download media</a>}
        </div>
      </div>
    </section>
  )
}
