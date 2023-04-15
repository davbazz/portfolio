'use client'

import { useState, useEffect } from 'react'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  //   const bodyEl = document.querySelector('body')
  //   const x1El = document.querySelector('.x-1')
  //   const x2El = document.querySelector('.x-2')
  //   const x3El = document.querySelector('.x-3')
  //   const menuEl = document.querySelector('.menu')
  //   if (isMenuOpen) {
  //     bodyEl?.classList.add('disable-scroll')
  //     x1El?.classList.add('close-x-1')
  //     x2El?.classList.add('close-x-2')
  //     x3El?.classList.add('close-x-3')
  //     menuEl?.classList.remove('move-menu-off')
  //     menuEl?.classList.add('move-menu-on')
  //   } else {
  //     bodyEl?.classList.remove('disable-scroll')
  //     x1El?.classList.remove('close-x-1')
  //     x2El?.classList.remove('close-x-2')
  //     x3El?.classList.remove('close-x-3')
  //     menuEl?.classList.remove('move-menu-on')
  //     menuEl?.classList.add('move-menu-off')
  //     setTimeout(() => {
  //       menuEl?.classList.remove('show-menu')
  //     }, 310)
  //   }
  // }

  // useEffect(() => {
    

    
  // }, [toggleMenu])
// let checkMenu: boolean = false

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      document.querySelector('body')?.classList.add('disable-scroll')
      document.querySelector('.x-1')?.classList.add('close-x-1')
      document.querySelector('.x-2')?.classList.add('close-x-2')
      document.querySelector('.x-3')?.classList.add('close-x-3')
      document.querySelector('.menu')?.classList.add('show-menu')
      setTimeout(() => {
        document.querySelector('.menu')?.classList.remove('move-menu-off')
        document.querySelector('.menu')?.classList.add('move-menu-on')
      }, 1)
    } else {
      document.querySelector('body')?.classList.remove('disable-scroll')
      document.querySelector('.x-1')?.classList.remove('close-x-1')
      document.querySelector('.x-2')?.classList.remove('close-x-2')
      document.querySelector('.x-3')?.classList.remove('close-x-3')
      document.querySelector('.menu')?.classList.remove('move-menu-on')
      document.querySelector('.menu')?.classList.add('move-menu-off')
      setTimeout(() => {
        document.querySelector('.menu')?.classList.remove('show-menu')
      }, 310)
    }
  }

  return (
    <nav className="py-[30px] lg:py-[40px] 2xl:py-[50px]">
      <div className="flex items-center justify-between">
        <a
          href="http://localhost:3000/"
          className={`${outfit.className} text-[26px] md:mt-[-8px] md:text-[28px] lg:text-[30px] xl:mt-[-10px] xl:text-[30px] 2xl:text-[32px]`}
        >
          davbaz
        </a>

        <div className="hidden items-center justify-between gap-8 md:flex lg:gap-12">
          <ul className="flex items-center justify-between gap-5 text-[15px] lg:gap-10 lg:text-[16px] 2xl:text-[18px]">
            <li>
              <a
                href="#about"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">01. </span>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">02. </span>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#playground"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">03. </span>
                Playground
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">04. </span>
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">05. </span>
                Contact
              </a>
            </li>
          </ul>

          <div className="w-[90px] rounded-md border-2 border-black lg:w-[100px] xl:w-[120px]">
            <a
              href="/resume.pdf"
              target="_blank"
              className="block w-full py-[9px] text-center text-[15px] sm:text-[17px] md:text-[15px] lg:text-[16px] xl:py-[10px] 2xl:text-[18px]"
            >
              Resume
            </a>
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="close z-10 flex cursor-pointer flex-col items-end justify-between gap-[5px] p-[3px] duration-500 md:hidden"
        >
          <span 
            className="x-1 inline-block h-[3px] w-[30px] rounded-md bg-black duration-300">
          </span>
          <span 
            className="x-2 inline-block h-[3px] w-[20px] rounded-md bg-black duration-300">
          </span>
          <span 
            className="x-3 inline-block h-[3px] w-[30px] rounded-md bg-black duration-300">
          </span>
        </div>
      </div>

      <aside 
        className="menu move-menu-off menu-width fixed top-0 hidden h-[100dvh] rounded-l-lg bg-white px-[30px] py-[30px] duration-300 md:w-[320px]">
        <div className="mt-[70px]">
          <ul className="mx-auto flex flex-col items-center justify-between gap-6 text-[17px]">
            <li className="block w-full">
              <a
                href="#about"
                className="flex w-full flex-col items-center justify-center"
                onClick={toggleMenu}
              >
                <span>01 . </span>
                About
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#skills"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>02 . </span>
                Skills
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#playground"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>03 . </span>
                Playground
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#work"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>04 . </span>
                Work
              </a>
            </li>
            <li className="block w-full">
              <a
                href="#contact"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>05 . </span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="my-[40px] mx-auto w-[140px] rounded-md border-2 border-black sm:w-[160px]">
          <a
            href="/resume.pdf"
            target="_blank"
            className="block w-full py-[12px] text-center text-[17px]"
          >
            Resume
          </a>
        </div>
      </aside>
    </nav>
  )
}
