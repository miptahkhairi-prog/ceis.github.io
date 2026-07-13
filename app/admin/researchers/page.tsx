import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminResearchersPage(){
  const researchers = await prisma.researcher.findMany({ take: 50 })
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Researchers</h1>
        <Link href="/admin/researchers/new" className="btn-primary">Add Researcher</Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {researchers.map(r => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.title ?? '-'}</td>
                <td className="px-4 py-3">{r.email ?? '-'}</td>
                <td className="px-4 py-3"> 
                  <Link href={`/admin/researchers/${r.id}`} className="text-sm text-primary">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
