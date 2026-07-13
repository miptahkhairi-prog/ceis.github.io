import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6).optional(),
  roleId: z.number().int().optional(),
})

export async function GET(){
  const data = await prisma.user.findMany({ include: { role: true }, take: 200 })
  return NextResponse.json(data)
}

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = userSchema.parse(body)
    // Note: password should be hashed by seed or separate endpoint; here we accept already-hashed or null
    const created = await prisma.user.create({ data: parsed })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data', details: String(err) }, { status: 400 })
  }
}
