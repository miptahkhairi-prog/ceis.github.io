export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">CEIS</h4>
          <p className="text-sm text-slate-600 mt-2">Center of Eastern Indonesian Studies — Membangun riset dan kapasitas di Indonesia Timur.</p>
        </div>
        <div>
          <h4 className="font-semibold">Link</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li><a href="/about">About</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/researchers">Researchers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kontak</h4>
          <p className="text-sm text-slate-600 mt-2">Jl. Contoh No.1, Kota — Email: info@ceis.id</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} CEIS — All rights reserved</div>
    </footer>
  )
}
