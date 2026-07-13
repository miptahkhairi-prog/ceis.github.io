'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({ email: z.string().email() })

export default function Newsletter(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(data: any){
    try{
      await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      setMessage('Terima kasih! Anda telah terdaftar.')
    }catch(err){
      setMessage('Terjadi kesalahan. Silakan coba lagi.')
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold">Berlangganan Newsletter</h3>
          <p className="text-sm text-slate-600 mt-2">Dapatkan pembaruan riset, acara, dan publikasi terbaru.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex gap-2">
            <input {...register('email')} placeholder="Email Anda" className="flex-1 border rounded-md px-3 py-2" />
            <button type="submit" disabled={isSubmitting} className="btn-primary">Daftar</button>
          </form>
          {errors.email && <div className="text-xs text-red-600 mt-2">{String(errors.email.message)}</div>}
          {message && <div className="text-sm text-slate-700 mt-2">{message}</div>}
        </div>
      </div>
    </section>
  )
}
