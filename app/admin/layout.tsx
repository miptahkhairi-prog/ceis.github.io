import AdminSidebar from '@/components/AdminSidebar'
import './admin.css'

export const metadata = { title: 'CEIS Admin' }

export default function AdminLayout({ children }: { children: React.ReactNode }){
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
