import Link from 'next/link'

export default function ProgramsPreview(){
  const programs = [
    { id: 'research', title: 'Research', desc: 'Proyek riset berfokus pada isu-isu lokal dan kebijakan.' },
    { id: 'training', title: 'Training & Workshops', desc: 'Program pengembangan kapasitas bagi pemuka masyarakat.' },
    { id: 'publication', title: 'Publications', desc: 'Jurnal, laporan, dan policy briefs.' },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Programs</h2>
          <Link href="/programs" className="text-primary">Lihat semua &raquo;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map(p => (
            <article key={p.id} className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <Link href={`/programs#${p.id}`} className="text-primary mt-3 inline-block">Selengkapnya</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
