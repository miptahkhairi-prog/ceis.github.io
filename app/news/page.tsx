export const metadata = { title: 'News - CEIS' }

export default function NewsPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">News</h1>
          <select className="border rounded-md px-3 py-2">
            <option>All Categories</option>
            <option>Seminar</option>
            <option>Workshop</option>
            <option>Research</option>
            <option>Publication</option>
          </select>
        </div>

        <div className="space-y-4">
          <article className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold">Seminar: Current Issues in Eastern Indonesia</h3>
            <p className="text-sm text-slate-600 mt-2">2026-08-01 &middot; Summary of seminar program and speakers.</p>
            <a href="#" className="text-primary mt-2 inline-block">Read more</a>
          </article>
        </div>
      </div>
    </section>
  )
}
