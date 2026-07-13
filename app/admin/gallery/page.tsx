import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminGalleryPage(){
  const items = await prisma.gallery.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <Link href="/admin/gallery/new" className="btn-primary">Add Media</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map(i => (
          <div key={i.id} className="bg-white rounded-md shadow-sm overflow-hidden">
            <div className="h-40 bg-slate-100">
              {i.type?.startsWith('image') ? <img src={i.file} alt={i.caption ?? 'media'} className="w-full h-full object-cover"/> : <div className="p-4">{i.type}</div>}
            </div>
            <div className="p-2 text-sm">{i.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
