"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden w-full items-center justify-center md:flex">
      
      <nav className="flex items-center space-x-2  text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "link transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            "link transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/customers"
          className={cn(
            "link transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Customers
        </Link>
        <Link
          href="/products"
          className={cn(
            "link transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Products
        </Link>
        <Link
          href="/tasks"
          className={cn(
            "link transition-colors hover:text-foreground/80",
            pathname === "/tasks" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Tasks
        </Link>
        <Link
          href="/forms"
          className={cn(
            "link transition-colors hover:text-foreground/80",
            pathname === "/forms" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Settings
        </Link>
      </nav>
    </div>
  )
}
