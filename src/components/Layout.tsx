
import { SidebarProvider } from "@/components/ui/sidebar"
import { ScadaSidebar } from "@/components/ScadaSidebar"
import { Header } from "@/components/Header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-950">
        <ScadaSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
