import Link from 'next/link'

const LINKS = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/researchers', label: 'Researchers' },
  { href: '/admin/publications', label: 'Publications' },
  { href: '/admin/news', label: 'News' },
  { href: '/admin/events', label: 'Events' },
  { href: '/admin/gallery', label: 'Gallery' },
  { href: '/admin/partners', label: 'Partners' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/settings', label: 'Settings' },
]

export default function AdminSidebar(){
  return (
    <aside className="w-64 h-screen sticky top-0 bg-white border-r">
      <div className="p-4 border-b">
        <Link href="/admin" className="font-bold text-primary">CEIS Admin</Link>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {LINKS.map(l => (
            <li key={l.href}><Link href={l.href} className="block text-sm text-slate-700 hover:text-primary">{l.label}</Link></li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
