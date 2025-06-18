
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Wifi, AlertTriangle } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-slate-900 border-b border-slate-800">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-slate-300 hover:text-white" />
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">SCADA Control System</h1>
          <Badge variant="outline" className="text-green-400 border-green-400">
            <Wifi className="w-3 h-3 mr-1" />
            Connected
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-sm text-slate-400">
          {new Date().toLocaleString()}
        </div>
        <Badge variant="outline" className="text-yellow-400 border-yellow-400">
          <AlertTriangle className="w-3 h-3 mr-1" />
          2 Warnings
        </Badge>
      </div>
    </header>
  )
}
