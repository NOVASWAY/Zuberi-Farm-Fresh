"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = ["about", "proprietors", "products", "services", "contact"]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-200 dark:border-green-800 bg-white/80 dark:bg-green-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-green-500 rounded-full scale-75 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 bg-green-600 dark:bg-green-400 rounded-sm rotate-45"></div>
            </div>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-green-800 dark:text-green-300">
            Zuberi Fresh
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium text-green-700 hover:text-green-900 dark:text-green-300 dark:hover:text-green-100 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 w-full bg-white dark:bg-green-950 border-b border-green-200 dark:border-green-800">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className="py-2 text-green-700 hover:text-green-900 dark:text-green-300 dark:hover:text-green-100"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

