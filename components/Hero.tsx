'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Membangun Manusia, Menguatkan Tradisi Akademik, Membentuk Masa Depan Indonesia Timur</h1>
          <p className="mt-6 text-lg text-slate-700">CEIS — Center of Eastern Indonesian Studies adalah pusat riset multidisiplin yang fokus pada isu-isu sosial, kebudayaan, pembangunan, dan kebijakan publik di wilayah Indonesia Timur.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center px-5 py-3 rounded-md bg-primary text-white hover:opacity-95">Jelajahi Riset</Link>
            <Link href="/about" className="inline-flex items-center px-5 py-3 rounded-md border border-slate-200">Tentang Kami</Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-semibold">120+</div>
              <div className="text-sm text-slate-500">Peneliti</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold">85</div>
              <div className="text-sm text-slate-500">Publikasi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold">40</div>
              <div className="text-sm text-slate-500">Kegiatan</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="/assets/hero-east-indonesia.svg" alt="Eastern Indonesia" width={720} height={480} className="w-full h-auto object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
