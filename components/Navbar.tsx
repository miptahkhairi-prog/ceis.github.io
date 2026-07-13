import Link from 'next/link'

const MENU = [
  'Home','About','Programs','Research','Publications','Training','News','Events','Researchers','Partners','Gallery','Contact','Admin Login'
]

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-primary">CEIS</Link>
        <nav className="hidden lg:flex gap-6 items-center">
          {MENU.map((m)=> (
            <Link key={m} href={`/${m.toLowerCase().replace(/\s+/g,'')}`} className="text-sm text-slate-700 hover:text-primary">{m}</Link>
          ))}
        </nav>
        <div className="lg:hidden">{/* mobile menu placeholder */}</div>
      </div>
    </header>
  )
}
