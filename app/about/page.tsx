export const metadata = { title: 'About - CEIS' }

export default function AboutPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Tentang CEIS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">Visi</h2>
            <p className="mt-2 text-slate-600">Menjadi pusat unggulan riset multidisiplin dan penguatan kapasitas kemanusiaan yang transformatif, inklusif, dan berdaya saing di wilayah Indonesia Timur.</p>

            <h2 className="text-xl font-semibold mt-4">Misi</h2>
            <ul className="list-disc pl-5 mt-2 text-slate-600">
              <li>Transformasi tradisi akademik</li>
              <li>Pengembangan SDM</li>
              <li>Advokasi pembangunan manusia</li>
              <li>Moderasi beragama</li>
              <li>Penguatan kolaborasi</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">Sejarah & Legalitas</h2>
            <p className="mt-2 text-slate-600">CEIS didirikan untuk menjawab kebutuhan penelitian dan penguatan kapasitas di wilayah Indonesia Timur. Informasi legalitas dan alamat akan tersedia di halaman ini.</p>

            <h2 className="text-xl font-semibold mt-4">Nilai</h2>
            <p className="mt-2 text-slate-600">Profesional, Akademik, Inklusif, Integritas, dan Keberlanjutan.</p>

            <h2 className="text-xl font-semibold mt-4">Alamat</h2>
            <p className="mt-2 text-slate-600">Jl. Contoh No.1, Kota, Provinsi, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
