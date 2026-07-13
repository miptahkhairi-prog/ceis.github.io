'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().optional(),
  content: z.string().min(10),
  category: z.string().optional(),
  published: z.boolean().optional(),
})

export default function NewNewsPage(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema as any) })
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(data: any){
    try{
      const res = await fetch('/api/news', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error('Failed')
      setMessage('News created')
    }catch(err){
      setMessage('Error creating news')
    }
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">New News / Article</h1>
      <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm">Title</label>
            <input {...register('title')} className="w-full border rounded-md px-3 py-2" />
            {errors.title && <p className="text-xs text-red-600">{String(errors.title.message)}</p>}
          </div>
          <div>
            <label className="block text-sm">Slug (optional)</label>
            <input {...register('slug')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Category</label>
            <input {...register('category')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Content</label>
            <textarea {...register('content')} className="w-full border rounded-md px-3 py-2 h-40" />
            {errors.content && <p className="text-xs text-red-600">{String(errors.content.message)}</p>}
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2"><input type="checkbox" {...register('published')} /> Publish now</label>
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
