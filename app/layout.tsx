import './globals.css'

export const metadata = {
  title: 'David Bazashvili',
  description: 'David Bazashvili - Hire Front End Developer based in the UK',
  keywords: 'front-end developer, hire developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
