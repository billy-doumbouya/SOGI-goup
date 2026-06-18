import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AdminSidebar from '@/components/layout/AdminSidebar'

export const metadata = { title: 'Dashboard | SOGIP Group' }

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  return (
    <div className="flex min-h-screen" style={{ background: '#0A0A0E' }}>
      <AdminSidebar user={session.user} />
      <main className="flex-1 overflow-auto">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}
