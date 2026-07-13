import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const researcherSchema = z.object({
  name: z.string().min(2),
  title: z.string().optional(),
  bio: z.string().optional(),
  email: z.string().email().optional(),
  photo: z.string().optional(),
})

export async function GET(){
  const data = await prisma.researcher.findMany({ take: 200 })
  return NextResponse.json(data)
}

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = researcherSchema.parse(body)
    const created = await prisma.researcher.create({ data: parsed })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data', details: String(err) }, { status: 400 })
  }
}
