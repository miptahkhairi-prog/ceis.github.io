'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  file: z.string().min(5),
  type: z.string().optional(),
  caption: z.string().optional(),
})

export default function NewGalleryPage(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema as any) })
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(data: any){
    try{
      const res = await fetch('/api/gallery', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error('Failed')
      setMessage('Media added')
    }catch(err){
      setMessage('Error adding media')
    }
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Add Media</h1>
      <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm">File URL (Cloudinary / remote)</label>
            <input {...register('file')} className="w-full border rounded-md px-3 py-2" />
            {errors.file && <p className="text-xs text-red-600">{String(errors.file.message)}</p>}
          </div>
          <div>
            <label className="block text-sm">Type (e.g. image/jpeg)</label>
            <input {...register('type')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Caption</label>
            <input {...register('caption')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">Add</button>
          </div>
          {message && <div className="text-sm mt-2">{message}</div>}
        </form>
      </div>
    </section>
  )
}
