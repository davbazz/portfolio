'use client'

import { useState } from 'react'
import { Outfit, DM_Mono } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      document.querySelector('body')?.classList.add('disable-scroll')
      document.querySelector('.x-1')?.classList.add('close-x-1')
      document.querySelector('.x-2')?.classList.add('close-x-2')
      document.querySelector('.x-3')?.classList.add('close-x-3')
      document.querySelector('.menu')?.classList.remove('move-menu-off')
      document.querySelector('.menu')?.classList.add('move-menu-on')
    } else {
      document.querySelector('body')?.classList.remove('disable-scroll')
      document.querySelector('.x-1')?.classList.remove('close-x-1')
      document.querySelector('.x-2')?.classList.remove('close-x-2')
      document.querySelector('.x-3')?.classList.remove('close-x-3')
      document.querySelector('.menu')?.classList.remove('move-menu-on')
      document.querySelector('.menu')?.classList.add('move-menu-off')
    }
  }

  return (
    <nav className={`${mono.className} py-[30px] lg:py-[40px] 2xl:py-[50px]`}>
      <div className="flex items-center justify-between">
        <a
          href="https://davidbazashvili.co.uk/"
          className={`${outfit.className} text-[24px] text-secondary md:mt-[-8px] md:text-[26px] lg:text-[28px] xl:mt-[-10px] xl:text-[30px] 2xl:text-[32px]`}
        >
          davbaz
        </a>

        <div className="hidden items-center justify-between gap-8 md:flex lg:gap-12">
          <ul className="flex items-center justify-between gap-5 text-[13px] lg:gap-8 lg:text-[15px] 2xl:text-[18px]">
            <li>
              <a
                href="#about"
                className="flex w-full items-center justify-center gap-1 p-1 duration-150 hover:text-secondary"
              >
                <span className="text-secondary">01.</span>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex w-full items-center justify-center gap-1 p-1 duration-150 hover:text-secondary"
              >
                <span className="text-secondary">02.</span>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="flex w-full items-center justify-center gap-1 p-1 duration-150 hover:text-secondary"
              >
                <span className="text-secondary">03.</span>
                Work
              </a>
            </li>
            <li>
              <a
                href="#playground"
                className="flex w-full items-center justify-center gap-1 p-1 duration-150 hover:text-secondary"
              >
                <span className="text-secondary">04.</span>
                Playground
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-1 p-1 duration-150 hover:text-secondary"
              >
                <span className="text-secondary">05.</span>
                Contact
              </a>
            </li>
          </ul>

          <div className="w-[90px] rounded-md border-2 border-secondary lg:w-[100px] xl:w-[120px]">
            <a
              href="/CV.pdf"
              target="_blank"
              className="block w-full py-[9px] text-center text-[13px] text-secondary duration-150 hover:bg-secondary/10 lg:text-[16px] xl:py-[10px] 2xl:text-[18px]"
            >
              Resume
            </a>
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="close z-10 mr-[-8px] flex cursor-pointer flex-col items-end justify-between gap-[5px] p-2 md:hidden"
        >
          <span className="x-1 inline-block h-[3px] w-[30px] rounded-md bg-secondary duration-300"></span>
          <span className="x-2 inline-block h-[3px] w-[20px] rounded-md bg-secondary duration-300"></span>
          <span className="x-3 inline-block h-[3px] w-[30px] rounded-md bg-secondary duration-300"></span>
        </div>
      </div>

      <aside className="menu move-menu-off menu-width z-5 fixed top-0 flex h-[100dvh] flex-col justify-between rounded-l-lg bg-third px-[30px] py-[30px] duration-300 md:w-[320px]">
        <div className="mt-[70px]">
          <ul className="mx-auto flex flex-col items-center justify-between gap-6 text-[17px]">
            <li className="block w-full">
              <a
                href="#about"
                className="flex w-full flex-col items-center justify-center rounded-md p-1 text-main duration-300 hover:bg-secondary/10 hover:text-secondary"
                onClick={toggleMenu}
              >
                <span className="text-secondary">01.</span>
                About
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#skills"
                className="flex w-full flex-col items-center justify-center rounded-md p-1 text-main duration-300 hover:bg-secondary/10 hover:text-secondary"
                onClick={toggleMenu}
              >
                <span className="text-secondary">02.</span>
                Skills
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#work"
                className="flex w-full flex-col items-center justify-center rounded-md p-1 text-main duration-300 hover:bg-secondary/10 hover:text-secondary"
                onClick={toggleMenu}
              >
                <span className="text-secondary">03.</span>
                Work
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#playground"
                className="flex w-full flex-col items-center justify-center rounded-md p-1 text-main duration-300 hover:bg-secondary/10 hover:text-secondary"
                onClick={toggleMenu}
              >
                <span className="text-secondary">04.</span>
                Playground
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#contact"
                className="flex w-full flex-col items-center justify-center rounded-md p-1 text-main duration-300 hover:bg-secondary/10 hover:text-secondary"
                onClick={toggleMenu}
              >
                <span className="text-secondary">05.</span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="btn my-[40px] mx-auto w-[140px] rounded-md border-[1px] border-secondary bg-third duration-200 hover:bg-secondary/10 sm:w-[160px]">
          <a
            href="/CV.pdf"
            target="_blank"
            className="block w-full py-[12px] text-center text-[17px] text-secondary"
          >
            Resume
          </a>
        </div>
      </aside>
    </nav>
  )
}
