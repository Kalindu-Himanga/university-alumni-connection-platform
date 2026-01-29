"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
  variant: "alumni" | "student" | "admin"
  userName?: string
}

export function DashboardLayout({ children, variant, userName }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant={variant} userName={userName} />
      
      <div className="flex">
        <Sidebar 
          variant={variant} 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 lg:ml-0">
          {/* Mobile menu button */}
          <div className="sticky top-16 z-30 flex items-center gap-4 border-b border-border bg-background px-4 py-3 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {variant} Portal
            </span>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
