import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
<link
  href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap"
  rel="stylesheet"
/>

export const metadata: Metadata = {
  title: '6th October Victory Day - Egypt 2023',
  description: '6th October Victory Day ',
  generator: 'habeba',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
