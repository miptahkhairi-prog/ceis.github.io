'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().optional(),
  description: z.string().optional(),
  startAt: z.string(),
  endAt: z.string().optional(),
  location: z.string().optional(),
})

export default function NewEventPage(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema as any) })
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(data: any){
    try{
      const body = { ...data, startAt: new Date(data.startAt).toISOString(), endAt: data.endAt ? new Date(data.endAt).toISOString() : undefined }
      const res = await fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (!res.ok) throw new Error('Failed')
      setMessage('Event created')
    }catch(err){
      setMessage('Error creating event')
    }
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">New Event</h1>
      <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm">Title</label>
            <input {...register('title')} className="w-full border rounded-md px-3 py-2" />
            {errors.title && <p className="text-xs text-red-600">{String(errors.title.message)}</p>}
          </div>
          <div>
            <label className="block text-sm">Start At</label>
            <input {...register('startAt')} type="datetime-local" className="w-full border rounded-md px-3 py-2" />
            {errors.startAt && <p className="text-xs text-red-600">{String(errors.startAt.message)}</p>}
          </div>
          <div>
            <label className="block text-sm">End At (optional)</label>
            <input {...register('endAt')} type="datetime-local" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Location</label>
            <input {...register('location')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">Create Event</button>
          </div>
          {message && <div className="text-sm mt-2">{message}</div>}
        </form>
      </div>
    </section>
  )
}
