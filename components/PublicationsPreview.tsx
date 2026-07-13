import Link from 'next/link'

export default function PublicationsPreview(){
  const pubs = [
    { id: 1, title: 'Report on Eastern Indonesia Development', year: 2024 },
    { id: 2, title: 'Working Paper: Digital Society', year: 2023 }
  ]

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest Publications</h2>
          <Link href="/publications" className="text-primary">Lihat semua &raquo;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pubs.map(p => (
            <article key={p.id} className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{p.year}</p>
              <Link href="/publications" className="text-primary mt-3 inline-block">Read</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
