import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'El Mehdi KZADRI Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body
        className={`${poppins.variable} font-sans antialiased grid grid-rows-[auto_1fr_auto] h-dvh`}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="p-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
