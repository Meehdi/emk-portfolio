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
import Logo from '@/components/common/Logo'

export default function Header() {
  const t = useTranslations('navigation')
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: '#', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header className="fixed top-0 z-50 p-8 flex w-full border-b border-border/40 bg-background/95 backdrop-blur ">
      <div className="container flex h-6 justify-between max-w-screen-2xl items-center">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-6 text-sm font-medium ">
            {navigationItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 px-2 py-1 rounded-lg hover:bg-amber-200/50 text-gray-800"
              >
                <h4>{item.label}</h4>
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
            <nav className="flex flex-col space-y-4 mt-16 text-center">
              {navigationItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 block px-2 py-1 hover:bg-amber-200/50"
                  onClick={() => setIsOpen(false)}
                >
                  <h5>{item.label}</h5>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
