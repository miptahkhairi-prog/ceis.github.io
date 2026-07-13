import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const gallerySchema = z.object({
  file: z.string().min(5),
  type: z.string().optional(),
  caption: z.string().optional(),
})

export async function GET(){
  const data = await prisma.gallery.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })
  return NextResponse.json(data)
}

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = gallerySchema.parse(body)
    const created = await prisma.gallery.create({ data: parsed })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data', details: String(err) }, { status: 400 })
  }
}
