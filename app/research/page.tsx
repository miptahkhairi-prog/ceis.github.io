export const metadata = { title: 'Research - CEIS' }

const FOCUS = [
  'Education','Politics','Democracy','Culture','Religion','Gender','Children','Human Rights','Peace Studies','Social Inclusion','Eastern Indonesia Development','Environment','SDGs','Digital Society','Public Policy'
]

export default function ResearchPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Research Focus</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {FOCUS.map((f)=> (
            <div key={f} className="p-4 bg-white rounded-md shadow-sm text-center">
              <div className="text-2xl mb-2">🔎</div>
              <div className="font-medium">{f}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
