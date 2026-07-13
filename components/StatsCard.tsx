export default function StatsCard({ title, value }: { title: string; value: number }){
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  )
}
