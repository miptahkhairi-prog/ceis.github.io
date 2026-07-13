export default function Features(){
  const items = [
    { title: 'Riset Multidisiplin', desc: 'Kolaborasi lintas disiplin untuk topik pendidikan, budaya, kebijakan, dan lingkungan.' },
    { title: 'Publikasi & JEIS', desc: 'Jurnal, laporan kebijakan, dan working papers untuk pengambil keputusan.' },
    { title: 'Capacity Building', desc: 'Pelatihan dan workshop untuk penguatan kapasitas lokal.' },
  ]

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Apa yang Kami Lakukan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
