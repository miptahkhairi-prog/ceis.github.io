import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

export async function POST(req: Request){
  try{
    const data = await req.json()
    // Expecting base64 or url from client. Here we support direct upload via remote_url
    const { imageUrl, folder = 'ceis' } = data
    if(!imageUrl) return NextResponse.json({ error: 'imageUrl required' }, { status: 400 })

    const result = await cloudinary.uploader.upload(imageUrl, { folder })
    return NextResponse.json({ result })
  }catch(err){
    return NextResponse.json({ error: 'upload failed', details: String(err) }, { status: 500 })
  }
}
