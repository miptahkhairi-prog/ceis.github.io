import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminEventsPage(){
  const events = await prisma.event.findMany({ orderBy: { startAt: 'desc' }, take: 200 })
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Events</h1>
        <Link href="/admin/events/new" className="btn-primary">Add Event</Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Start</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(e => (
              <tr key={e.id} className="border-t">
                <td className="px-4 py-3">{e.title}</td>
                <td className="px-4 py-3">{new Date(e.startAt).toLocaleString()}</td>
                <td className="px-4 py-3">{e.location ?? '-'}</td>
                <td className="px-4 py-3"> 
                  <Link href={`/admin/events/${e.id}`} className="text-sm text-primary">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
