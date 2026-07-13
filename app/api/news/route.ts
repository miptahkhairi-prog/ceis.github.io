import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const newsSchema = z.object({
  title: z.string().min(2),
  slug: z.string().optional(),
  content: z.string().min(10),
  category: z.string().optional(),
  featured: z.string().optional(),
  published: z.boolean().optional(),
})

export async function GET(){
  const data = await prisma.news.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })
  return NextResponse.json(data)
}

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = newsSchema.parse(body)
    const created = await prisma.news.create({ data: parsed })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data', details: String(err) }, { status: 400 })
  }
}
