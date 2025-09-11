import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import React from "react";

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
            className={`${poppins.variable} font-sans antialiased`}
        >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
        </html>
    )
}
