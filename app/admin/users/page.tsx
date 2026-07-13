import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminUsersPage(){
  const users = await prisma.user.findMany({ include: { role: true }, take: 200 })
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link href="/admin/users/new" className="btn-primary">Add User</Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">{u.name ?? '-'}</td>
                <td className="px-4 py-3">{u.role?.name ?? '-'}</td>
                <td className="px-4 py-3"> 
                  <Link href={`/admin/users/${u.id}`} className="text-sm text-primary">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
