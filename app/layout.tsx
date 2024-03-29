import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'David Bazashvili',
  description: 'David Bazashvili - Web Developer based in the UK',
  keywords: 'web developer, hire web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-back">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
