import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">CENTER OF EASTERN INDONESIAN STUDIES (CEIS)</h1>
            <p className="mt-6 text-lg text-slate-700">Building People, Strengthening Academic Traditions, Shaping the Future of Eastern Indonesia.</p>
            <div className="mt-8 flex gap-4">
              <Link href="/research" className="btn-primary inline-flex items-center px-5 py-3 rounded-md bg-primary text-white hover:opacity-95">Explore Research</Link>
              <Link href="/contact" className="inline-flex items-center px-5 py-3 rounded-md border border-slate-200">Contact Us</Link>
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
      </div>
    </section>
  )
}
