import './globals.css'
import Footer from './footer'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({
  weight: "400",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = { }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Welcome to TOMPED!!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
