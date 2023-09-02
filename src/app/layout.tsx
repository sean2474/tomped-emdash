import './globals.css'
import Footer from './footer'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import Script from 'next/script'

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
    <html lang="en" className={inter.className}>
      <head>
        <title>Welcome to TOMPED!!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href='/favicon.ico'/>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-13MSZV3GMR"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-13MSZV3GMR');
          `}
        </Script>
      </head>
      <body>{children}</body>
      <Footer />
    </html>
  )
}
