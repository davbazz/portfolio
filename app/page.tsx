// import Hero from './components/Hero'
import Nav from './components/Nav'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="mx-auto">
        <Nav />
        {/* <Hero/> */}
      </div>
    </main>
  )
}
