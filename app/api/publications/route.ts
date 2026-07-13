import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const publicationSchema = z.object({
  title: z.string().min(2),
  abstract: z.string().optional(),
  year: z.number().int().optional(),
  doi: z.string().optional(),
  type: z.enum(['JOURNAL','BOOK','WORKING_PAPER','POLICY_BRIEF','REPORT','CONFERENCE']).optional(),
  cover: z.string().optional(),
  pdf: z.string().optional(),
})

export async function GET(){
  const data = await prisma.publication.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })
  return NextResponse.json(data)
}

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = publicationSchema.parse(body)
    const created = await prisma.publication.create({ data: parsed })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data', details: String(err) }, { status: 400 })
  }
}
