import { motion } from 'framer-motion'

export const metadata = {
  title: 'CENTER OF EASTERN INDONESIAN STUDIES (CEIS) - Home',
}

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">CENTER OF EASTERN INDONESIAN STUDIES (CEIS)</h1>
            <p className="mt-6 text-lg text-slate-700">Building People, Strengthening Academic Traditions, Shaping the Future of Eastern Indonesia.</p>
            <div className="mt-8 flex gap-4">
              <a href="/research" className="inline-flex items-center px-5 py-3 rounded-md bg-primary text-white hover:opacity-95">Explore Research</a>
              <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-md border border-slate-200">Contact Us</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video autoPlay muted loop playsInline className="w-full h-80 object-cover">
                <source src="/assets/hero-east-indonesia.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">Our Vision</h3>
            <p className="mt-2 text-sm text-slate-600">Menjadi pusat unggulan riset multidisiplin dan penguatan kapasitas kemanusiaan di wilayah Indonesia Timur.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">Programs</h3>
            <p className="mt-2 text-sm text-slate-600">Research, Capacity Building, Publications, Community Development.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">Get Involved</h3>
            <p className="mt-2 text-sm text-slate-600">Collaborate with us, attend events, or support our initiatives.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
