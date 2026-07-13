import Link from 'next/link'

export default function ResearchersPreview(){
  const researchers = [
    { id: 1, name: 'Dr. A. Researcher', role: 'Senior Fellow' },
    { id: 2, name: 'Dr. B. Scholar', role: 'Researcher' }
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Researchers</h2>
          <Link href="/researchers" className="text-primary">Lihat semua &raquo;</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {researchers.map(r => (
            <article key={r.id} className="bg-white p-4 rounded-md shadow-sm text-center">
              <div className="h-28 w-28 bg-slate-100 rounded-full mx-auto mb-3" />
              <div className="font-semibold">{r.name}</div>
              <div className="text-sm text-slate-500">{r.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
