export const metadata = { title: 'Publications - CEIS' }

export default function PublicationsPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Publications</h1>
          <div className="flex gap-3">
            <input placeholder="Search publications" className="border rounded-md px-3 py-2" />
            <select className="border rounded-md px-3 py-2">
              <option>All Types</option>
              <option>Journal</option>
              <option>Book</option>
              <option>Working Paper</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder publication cards */}
          <article className="bg-white rounded-md shadow-sm p-4">
            <div className="h-40 bg-slate-100 mb-3" />
            <h3 className="font-semibold">Report on Eastern Indonesia Development</h3>
            <p className="text-sm text-slate-600 mt-2">2024 &middot; Policy Report</p>
            <a href="#" className="text-primary inline-block mt-3">Download PDF</a>
          </article>
        </div>

      </div>
    </section>
  )
}
