'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const t = useTranslations('navigation')
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-50 p-8 flex w-full border-b border-border/40 bg-background/95 backdrop-blur ">
      <div className="container flex h-14 justify-between max-w-screen-2xl items-center">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <h2>{t('logo')}</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-6 text-sm font-medium">
            {navigationItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <h3>{item.label}</h3>
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>{t('logo')}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 block px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  <h3>{item.label}</h3>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
