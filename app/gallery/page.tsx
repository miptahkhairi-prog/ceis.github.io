export const metadata = { title: 'Gallery - CEIS' }

export default function GalleryPage(){
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="h-40 bg-slate-100" />
          <div className="h-40 bg-slate-100" />
          <div className="h-40 bg-slate-100" />
          <div className="h-40 bg-slate-100" />
        </div>
      </div>
    </section>
  )
}
