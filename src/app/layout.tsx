import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/globals.scss'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'David Bazashvili',
  description:
    "Hi, I'm David Bazashvili and I'm a software engineer at Together Creative",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  )
}
