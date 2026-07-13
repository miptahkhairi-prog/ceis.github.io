import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminNewsPage(){
  const news = await prisma.news.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">News</h1>
        <Link href="/admin/news/new" className="btn-primary">Add News</Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Published</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map(n => (
              <tr key={n.id} className="border-t">
                <td className="px-4 py-3">{n.title}</td>
                <td className="px-4 py-3">{n.category}</td>
                <td className="px-4 py-3">{n.published ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3"> 
                  <Link href={`/admin/news/${n.id}`} className="text-sm text-primary">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
