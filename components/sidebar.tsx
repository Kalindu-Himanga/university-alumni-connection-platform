"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  User,
  Trophy,
  Briefcase,
  Calendar,
  Users,
  BookOpen,
  FileText,
  BarChart3,
  Shield,
  GraduationCap,
  X,
} from "lucide-react"

interface SidebarProps {
  variant: "alumni" | "student" | "admin"
  isOpen?: boolean
  onClose?: () => void
}

const navigationItems = {
  alumni: [
    { href: "/alumni/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/alumni/profile", label: "My Profile", icon: User },
    { href: "/alumni/achievements", label: "Achievements", icon: Trophy },
    { href: "/alumni/jobs", label: "Job Postings", icon: Briefcase },
    { href: "/alumni/events", label: "Events", icon: Calendar },
    { href: "/alumni/mentorship", label: "Mentorship", icon: BookOpen },
  ],
  student: [
    { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/alumni-directory", label: "Alumni Directory", icon: Users },
    { href: "/student/jobs", label: "Jobs & Internships", icon: Briefcase },
    { href: "/student/mentorship", label: "Mentorship", icon: BookOpen },
    { href: "/student/events", label: "Events", icon: Calendar },
  ],
  admin: [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/content", label: "Content Moderation", icon: FileText },
    { href: "/admin/reports", label: "Reports & Analytics", icon: BarChart3 },
  ],
}

export function Sidebar({ variant, isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname()
  const items = navigationItems[variant]

  const roleLabels = {
    alumni: "Alumni Portal",
    student: "Student Portal",
    admin: "Admin Panel",
  }

  const roleIcons = {
    alumni: GraduationCap,
    student: BookOpen,
    admin: Shield,
  }

  const RoleIcon = roleIcons[variant]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-64 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Role Header */}
        <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
              <RoleIcon className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            <span className="font-semibold text-sidebar-foreground">{roleLabels[variant]}</span>
          </div>
          <button
            type="button"
            className="rounded-md p-1 text-sidebar-foreground hover:bg-sidebar-accent lg:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {items.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
                onClick={onClose}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          <p className="text-xs text-sidebar-foreground/60">
            Uva Wellassa University
          </p>
          <p className="text-xs text-sidebar-foreground/40">
            UniBondz Platform
          </p>
        </div>
      </aside>
    </>
  )
}
