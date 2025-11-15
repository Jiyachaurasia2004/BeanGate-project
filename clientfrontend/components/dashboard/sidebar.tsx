"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Settings, BarChart3, Ticket, CreditCard, User, Menu, Zap, FileChartColumn } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/tickets", label: "Support Tickets", icon: Ticket },
  { href: "/dashboard/services", label: "Services", icon: Zap },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard/project_link", label: "Project Link", icon: FileChartColumn },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 z-30 h-screen w-64 transform bg-sidebar text-sidebar-foreground shadow-2xl transition-transform duration-300 md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-sidebar-border bg-gradient-to-r from-orange-500 via-purple-600 to-teal-500">
            <h1 className="text-lg font-bold text-white tracking-wide">Beangate IT</h1>
            {/* <Image src={"https://res.cloudinary.com/diab9p5zk/image/upload/v1761990077/Beangate-logo_cc5ild.png"} alt="beangate logo" height={80} width={80}/> */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-400 to-teal-400 text-purple-900 font-semibold shadow-lg shadow-orange-400/50"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border p-4 bg-sidebar-accent/50">
            <p className="text-xs text-sidebar-foreground/70">© 2025 Beangate IT Solutions</p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-20 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
