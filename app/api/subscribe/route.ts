import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const subscribeSchema = z.object({ email: z.string().email() })

export async function POST(req: Request){
  try{
    const body = await req.json()
    const parsed = subscribeSchema.parse(body)
    const created = await prisma.subscriber.create({ data: { email: parsed.email } })
    return NextResponse.json(created)
  }catch(err){
    return NextResponse.json({ error: 'Invalid data or already subscribed', details: String(err) }, { status: 400 })
  }
}
