export const metadata = { title: 'Programs - CEIS' }

const PROGRAMS = [
  { id: 'research', title: 'Research', description: 'Multidisciplinary research projects', image: '/assets/program-research.jpg' },
  { id: 'capacity', title: 'Capacity Building', description: 'Training and workshops for local actors', image: '/assets/program-capacity.jpg' },
  { id: 'publication', title: 'Publication', description: 'Journals, reports, policy briefs', image: '/assets/program-publication.jpg' },
  { id: 'community', title: 'Community Development', description: 'Programs that engage communities', image: '/assets/program-community.jpg' },
]

export default function ProgramsPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map(p => (
            <article key={p.id} className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="h-36 bg-slate-100">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <a href={`/programs#${p.id}`} className="mt-3 inline-block text-primary text-sm">Detail &raquo;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
