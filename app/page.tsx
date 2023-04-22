import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Playground from './components/Playground'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'
import Email from './components/Email'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`${inter.className} overflow-hidden overflow-y-hidden`}>
      <div className="relative mx-auto px-[24px] lg:max-w-[calc(100vw-80px)] lg:px-0 2xl:max-w-[calc(100vw-140px)]">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Playground />
        <Contact />
        <Footer />

        <SocialLinks />
        <Email />
      </div>
    </main>
  )
}
