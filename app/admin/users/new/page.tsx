'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { hashPassword } from '@/lib/hash'

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6),
  roleId: z.string().optional(),
})

export default function NewUserPage(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = async (data: any) => {
    // NOTE: in production, hashing should happen server-side. This is a simple demo.
    const hashed = await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, roleId: data.roleId ? Number(data.roleId) : undefined }) })
    if(!hashed.ok) alert('Created')
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <div className="bg-white p-6 rounded-md shadow-sm max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <input {...register('email')} className="w-full border rounded-md px-3 py-2" />
            {errors.email && <p className="text-xs text-red-600">{String(errors.email.message)}</p>}
          </div>
          <div>
            <label className="block text-sm">Name</label>
            <input {...register('name')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input type="password" {...register('password')} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">Create User</button>
          </div>
        </form>
      </div>
    </section>
  )
}
