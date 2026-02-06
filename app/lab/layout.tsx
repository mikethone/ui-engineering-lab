"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function LabLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { href: "/lab", label: "Overview" },
    { href: "/lab/buttons", label: "Buttons" },
    { href: "/lab/typography", label: "Typography" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1200px] mx-auto bg-white p-6 rounded-md shadow-sm">
        <div className="grid grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-gray-200 p-4 rounded-md">
            <strong className="block text-lg">Navigation</strong>
            <nav className="mt-3 text-sm flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center px-2 py-1 rounded
                      border-l-4
                      ${isActive ? "border-blue-600 font-semibold text-blue-700" : "border-transparent text-gray-700 hover:bg-gray-300"}
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Main content */}
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
