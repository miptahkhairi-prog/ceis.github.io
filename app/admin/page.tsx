import prisma from '@/lib/prisma'
import StatsCard from '@/components/StatsCard'

export default async function AdminPage(){
  const [publicationsCount, researchersCount, newsCount, eventsCount] = await Promise.all([
    prisma.publication.count(),
    prisma.researcher.count(),
    prisma.news.count(),
    prisma.event.count(),
  ])

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Publications" value={publicationsCount} />
        <StatsCard title="Researchers" value={researchersCount} />
        <StatsCard title="News" value={newsCount} />
        <StatsCard title="Events" value={eventsCount} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Visitor Analytics (placeholder)</h2>
        <div className="h-64 bg-white rounded-md shadow-sm flex items-center justify-center text-slate-400">Charts will be here (Recharts)</div>
      </div>
    </section>
  )
}
