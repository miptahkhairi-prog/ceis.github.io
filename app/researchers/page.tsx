export const metadata = { title: 'Researchers - CEIS' }

export default function ResearchersPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Researchers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Placeholder researcher cards - real data will come from API */}
          <article className="bg-white rounded-md shadow-sm p-4">
            <div className="h-40 bg-slate-100 mb-3" />
            <h3 className="font-semibold">Dr. A. Researcher</h3>
            <p className="text-sm text-slate-600">Senior Fellow — Education & Culture</p>
            <a href="#" className="text-primary inline-block mt-3">View profile</a>
          </article>
        </div>
      </div>
    </section>
  )
}
