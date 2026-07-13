'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  title: z.string().min(2),
  abstract: z.string().optional(),
  year: z.number().int().optional(),
  doi: z.string().optional(),
  type: z.string().optional(),
  pdf: z.string().optional(),
})

export default function NewPublicationPage(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema as any) })
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(data: any){
    try{
      const body = { ...data, year: data.year ? Number(data.year) : undefined }
      const res = await fetch('/api/publications', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (!res.ok) throw new Error('Failed')
      setMessage('Publication created')
    }catch(err){
      setMessage('Error creating publication')
    }
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">New Publication</h1>
      <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm">Title</label>
            <input {...register('title')} className="w-full border rounded-md px-3 py-2" />
            {errors.title && <p className="text-xs text-red-600">{String(errors.title.message)}</p>}
          </div>
          <div>
            <label className="block text-sm">Abstract</label>
            <textarea {...register('abstract')} className="w-full border rounded-md px-3 py-2 h-24" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Year</label>
              <input {...register('year')} type="number" className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm">Type</label>
              <select {...register('type')} className="w-full border rounded-md px-3 py-2">
                <option value="JOURNAL">Journal</option>
                <option value="BOOK">Book</option>
                <option value="WORKING_PAPER">Working Paper</option>
                <option value="POLICY_BRIEF">Policy Brief</option>
                <option value="REPORT">Report</option>
                <option value="CONFERENCE">Conference</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm">DOI</label>
            <input {...register('doi')} className="w-full border rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm">PDF URL</label>
            <input {...register('pdf')} className="w-full border rounded-md px-3 py-2" />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">Create</button>
          </div>
          {message && <div className="text-sm mt-2">{message}</div>}
        </form>
      </div>
    </section>
  )
}
