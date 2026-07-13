import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600'], variable: '--font-poppins' })

export const metadata = {
  title: 'CENTER OF EASTERN INDONESIAN STUDIES (CEIS)',
  description: 'Building People, Strengthening Academic Traditions, Shaping the Future of Eastern Indonesia.',
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
