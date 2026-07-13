export const metadata = { title: 'Events - CEIS' }

export default function EventsPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <p className="text-slate-600">Upcoming events and calendar will be displayed here. Integration with Google Calendar / registration forms will be implemented in the admin dashboard.</p>
        </div>
      </div>
    </section>
  )
}
