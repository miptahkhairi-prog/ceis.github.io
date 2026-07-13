import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const eventSchema = z.object({
  title: z.string().min(2),
  slug: z.string().optional(),
  description: z.string().optional(),
  startAt: z.string(),
  endAt: z.string().optional(),
  location: z.string().optional(),
})

export async function GET(){
  const data = await prisma.event.findMany({ orderBy: { startAt: 'desc' }, take: 200 })
  return NextResponse.json(data)
}

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = eventSchema.parse(body)
    const created = await prisma.event.create({ data: parsed })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data', details: String(err) }, { status: 400 })
  }
}
