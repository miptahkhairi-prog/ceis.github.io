export const metadata = { title: 'JEIS - Journal of Eastern Indonesian Studies' }

export default function JEISPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Journal of Eastern Indonesian Studies (JEIS)</h1>
        <p className="text-slate-600 mb-6">Aim & Scope, Volumes & Issues, Editorial Board, and submission guidelines will be published here.</p>

        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="font-semibold">Latest Volume</h2>
          <p className="mt-2 text-sm text-slate-600">Volume X (Year) &middot; Issue Y</p>
        </div>
      </div>
    </section>
  )
}
