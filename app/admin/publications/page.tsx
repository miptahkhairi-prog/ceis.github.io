import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminPublicationsPage(){
  const publications = await prisma.publication.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Publications</h1>
        <Link href="/admin/publications/new" className="btn-primary">Add Publication</Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {publications.map(p => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-3">{p.title}</td>
                <td className="px-4 py-3">{p.type}</td>
                <td className="px-4 py-3">{p.year ?? '-'}</td>
                <td className="px-4 py-3"> 
                  <Link href={`/admin/publications/${p.id}`} className="text-sm text-primary">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
