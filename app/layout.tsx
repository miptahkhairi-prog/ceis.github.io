import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-poppins' })

export const metadata = {
  title: 'CENTER OF EASTERN INDONESIAN STUDIES (CEIS)',
  description: 'Building People, Strengthening Academic Traditions, Shaping the Future of Eastern Indonesia.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/assets/ceis-logo.svg'
  },
  openGraph: {
    title: 'CEIS - Center of Eastern Indonesian Studies',
    description: 'Building People, Strengthening Academic Traditions, Shaping the Future of Eastern Indonesia.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'CEIS',
    images: [
      { url: '/assets/ceis-logo.svg', width: 1200, height: 630, alt: 'CEIS Logo' }
    ],
    locale: 'id_ID',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background text-slate-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
