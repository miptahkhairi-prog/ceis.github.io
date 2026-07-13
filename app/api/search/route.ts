import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Simple global search across publications, researchers, and news
export async function POST(req: Request){
  try{
    const { q } = await req.json()
    if (!q || typeof q !== 'string') return NextResponse.json({ error: 'query required' }, { status: 400 })

    const publications = await prisma.publication.findMany({ where: { title: { contains: q, mode: 'insensitive' } }, take: 10 })
    const researchers = await prisma.researcher.findMany({ where: { name: { contains: q, mode: 'insensitive' } }, take: 10 })
    const news = await prisma.news.findMany({ where: { title: { contains: q, mode: 'insensitive' } }, take: 10 })

    return NextResponse.json({ publications, researchers, news })
  }catch(err){
    return NextResponse.json({ error: 'search failed', details: String(err) }, { status: 500 })
  }
}
