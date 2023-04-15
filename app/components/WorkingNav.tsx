'use client'

import Link from 'next/link'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Nav() {
  const showMenu = () => {
    document.querySelector('.menu')?.classList.add('show-menu')
    setTimeout(() => {
      document.querySelector('.menu')?.classList.remove('move-menu-off')
      document.querySelector('.menu')?.classList.add('move-menu-on')
    }, 1)
  }

  const hideMenu = () => {
    document.querySelector('.menu')?.classList.remove('move-menu-on')
    document.querySelector('.menu')?.classList.add('move-menu-off')
    setTimeout(() => {
      document.querySelector('.menu')?.classList.remove('show-menu')
    }, 310)
  }

  return (
    <nav className="relative py-[30px] lg:py-[40px] 2xl:py-[50px]">
      <div className="flex items-center justify-between">
        <Link
          href="http://localhost:3000/"
          className={`${outfit.className} text-[26px] md:mt-[-8px] md:text-[28px] lg:text-[30px] xl:mt-[-10px] xl:text-[30px] 2xl:text-[32px]`}
        >
          davbaz
        </Link>

        <div className="hidden items-center justify-between gap-8 md:flex lg:gap-12">
          <ul className="flex items-center justify-between gap-5 text-[15px] lg:gap-10 lg:text-[16px] 2xl:text-[18px]">
            <li>
              <Link
                href="#about"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">01. </span>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">02. </span>
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#playground"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">03. </span>
                Playground
              </Link>
            </li>
            <li>
              <Link
                href="#work"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">04. </span>
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="">05. </span>
                Contact
              </Link>
            </li>
          </ul>

          <div className="w-[90px] rounded-md border-2 border-black lg:w-[100px] xl:w-[120px]">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="block w-full py-[9px] text-center text-[15px] sm:text-[17px] md:text-[15px] lg:text-[16px] xl:py-[10px] 2xl:text-[18px]"
            >
              Resume
            </Link>
          </div>
        </div>

        <div
          onClick={showMenu}
          className="close flex cursor-pointer flex-col items-end justify-between gap-[5px] duration-500 md:hidden"
        >
          <span className="inline-block h-[3px] w-[30px] rounded-md bg-black"></span>
          <span className="inline-block h-[3px] w-[30px] rounded-md bg-black"></span>
          <span className="inline-block h-[3px] w-[30px] rounded-md bg-black"></span>
        </div>
      </div>

      <aside className="menu move-menu-off menu-width absolute top-0 hidden h-[100dvh]  rounded-l-lg bg-white px-[30px] py-[30px] duration-300 md:w-[320px]">
        <div className="flex justify-end" onClick={hideMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-x-square h-10 w-10 cursor-pointer"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>

        <div className="mt-[40px]">
          <ul className="mx-auto flex flex-col items-center justify-between gap-6 text-[17px]">
            <li className="block w-full">
              <Link
                href="#about"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>01 . </span>
                About
              </Link>
            </li>
            <li className="block w-full">
              <Link
                href="#skills"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>02 . </span>
                Skills
              </Link>
            </li>
            <li className="block w-full">
              <Link
                href="#playground"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>03 . </span>
                Playground
              </Link>
            </li>
            <li className="block w-full">
              <Link
                href="#work"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>04 . </span>
                Work
              </Link>
            </li>
            <li className="block w-full">
              <Link
                href="#contact"
                className="flex w-full flex-col items-center justify-center"
              >
                <span>05 . </span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="my-[40px] mx-auto w-[140px] rounded-md border-2 border-black sm:w-[160px]">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="block w-full py-[12px] text-center text-[17px]"
          >
            Resume
          </Link>
        </div>
      </aside>
    </nav>
  )
}