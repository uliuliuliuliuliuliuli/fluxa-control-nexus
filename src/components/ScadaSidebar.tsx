
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  Monitor, 
  Thermometer, 
  BarChart3, 
  Cable, 
  Users, 
  Settings,
  ChevronDown,
  ChevronRight
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Control Room", url: "/", icon: Monitor },
  { title: "Climate Adjustment", url: "/climate", icon: Thermometer },
  { title: "History Data", url: "/history", icon: BarChart3 },
  { title: "GPE Interface", url: "/gpe", icon: Cable },
  { title: "Access Management", url: "/access", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function ScadaSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavClass = (path: string) =>
    isActive(path) 
      ? "bg-blue-600 text-white font-medium" 
      : "text-slate-300 hover:bg-slate-800 hover:text-white"

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarContent className="bg-slate-900 border-r border-slate-800">
        <div className="p-4">
          {!collapsed && (
            <div className="text-center">
              <h2 className="text-lg font-bold text-white mb-1">FUXA SCADA</h2>
              <p className="text-xs text-slate-400">Industrial Control System</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs font-medium">
            SYSTEM NAVIGATION
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`flex items-center gap-3 px-3 py-2 rounded-md ${getNavClass(item.url)}`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-slate-400 text-xs font-medium">
              PLC STATUS
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-2 px-3">
                {[1, 2, 3, 4].map((plc) => (
                  <div key={plc} className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">PLC-{plc}</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
