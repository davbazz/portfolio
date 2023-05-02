import Image from 'next/image'
import JavaScript from '../../public/javascript.svg'
import HTML from '../../public/html5.svg'
import CSS from '../../public/css3.svg'
import React from '../../public/react.svg'
import Next from '../../public/nextjs.svg'
import Node from '../../public/nodejs.svg'
import TypeScript from '../../public/typescript.svg'
import Go from '../../public/golang.svg'
import Tailwind from '../../public/tailwind.svg'
import Git from '../../public/git.svg'
import API from '../../public/api.svg'
import Database from '../../public/database.svg'

import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Skills() {
  return (
    <section
      className="mt-[40px] py-[40px] sm:py-[50px] md:py-[70px] lg:mx-auto lg:max-w-[64%] lg:py-[100px] xl:max-w-[58%] xl:py-[120px] 2xl:max-w-[800px]"
      id="skills"
    >
      <div className="flex flex-nowrap items-center justify-start gap-[2px] md:gap-[5px]">
        <span
          className={`${mono.className} mt-[3px] text-[20px] font-normal text-secondary sm:mt-[4px] md:text-[21px] xl:text-[22px]`}
        >
          02.
        </span>

        <h2 className="mr-[10px] whitespace-nowrap text-[26px] font-bold text-main sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
          Skills
        </h2>

        <span className="inline-block h-[1px] w-full rounded-md bg-main/90 lg:w-[50%]"></span>
      </div>

      <p
        className={`${mono.className} mt-[40px] text-[17px] text-secondary md:text-[18px]`}
      >
        Here are some of the technologies I use:
      </p>

      <div className="mt-[40px] flex flex-col gap-8 text-[16px] md:flex-row md:text-[17px] xl:text-[18px]">
        <ul className="flex flex-col gap-8">
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image
                src={JavaScript}
                alt={`JavaScript`}
                className="h-16 w-16"
              />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">1 year</p>
              <p>
                <span className="italic">JavaScript</span> - a programming
                language
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={HTML} alt={`HTML`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">2 years</p>
              <p>
                <span className="italic">HTML</span> - a mark up language
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={CSS} alt={`CSS`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">2 years</p>
              <p>
                <span className="italic">CSS</span> - a stylesheet language
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={React} alt={`React`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">1 year</p>
              <p>
                <span className="italic">React</span> - a JavaScript library for
                building Front-End
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={Next} alt={`Next.js`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">1 year</p>
              <p>
                <span className="italic">Next.js</span> - a React framework for
                building Front-End and Back-End
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={Node} alt={`Node.js`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">{`<`}1 year</p>
              <p>
                <span className="italic">Node.js</span> - a Back-End JavaScript
                runtime
              </p>
            </div>
          </li>
        </ul>

        <ul className="flex flex-col gap-8">
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image
                src={TypeScript}
                alt={`TypeScript`}
                className="h-16 w-16"
              />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">{`<`}1 year</p>
              <p>
                <span className="italic">TypeScript</span> - a programming
                language
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={Go} alt={`Go`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">{`<`}1 year</p>
              <p>
                <span className="italic">Golang</span> - a programming language
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={Tailwind} alt={`Tailwind`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">1 year</p>
              <p>
                <span className="italic">Tailwind</span> - a CSS framework
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={Git} alt={`Git`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">2 years</p>
              <p>
                <span className="italic">Git</span> - a version control system
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={API} alt={`API`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">1 year</p>
              <p>
                <span className="italic">API's</span> - a way for programs to
                communicate with each other
              </p>
            </div>
          </li>
          <li className="flex items-center justify-start gap-6">
            <div className="h-16 w-16">
              <Image src={Database} alt={`Database`} className="h-16 w-16" />
            </div>
            <div className="max-w-[calc(100%-88px)]">
              <p className="font-semibold text-main">1 year</p>
              <p>
                <span className="italic">Database</span> - a collection of data
                stored and accessed electronically
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
