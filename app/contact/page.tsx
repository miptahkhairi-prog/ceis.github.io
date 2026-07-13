'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
})

export const metadata = { title: 'Contact - CEIS' }

export default function ContactPage(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  async function onSubmit(data: any){
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    alert('Pesan terkirim (demo)')
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm">Name</label>
              <input {...register('name')} className="w-full border rounded-md px-3 py-2" />
              {errors.name && <p className="text-xs text-red-600">{String(errors.name.message)}</p>}
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input {...register('email')} className="w-full border rounded-md px-3 py-2" />
              {errors.email && <p className="text-xs text-red-600">{String(errors.email.message)}</p>}
            </div>
            <div>
              <label className="block text-sm">Subject</label>
              <input {...register('subject')} className="w-full border rounded-md px-3 py-2" />
              {errors.subject && <p className="text-xs text-red-600">{String(errors.subject.message)}</p>}
            </div>
            <div>
              <label className="block text-sm">Message</label>
              <textarea {...register('message')} className="w-full border rounded-md px-3 py-2 h-32" />
              {errors.message && <p className="text-xs text-red-600">{String(errors.message.message)}</p>}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
