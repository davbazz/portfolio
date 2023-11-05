import Image from 'next/image'
import Stocks from '../../public/Stocks.png'
import Game from '../../public/Game.png'
import Qpos from '../../public/qpos.png'
// import Starwars from '../../public/Starwars.png'

import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Work() {
  return (
    <section
      className="mx-auto mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] lg:px-[80px] xl:py-[120px] xl:px-[150px] 2xl:max-w-[1140px] 2xl:px-0"
      id="work"
    >
      <div className="flex flex-nowrap items-center justify-start gap-[2px] md:gap-[5px]">
        <span
          className={`${mono.className} mt-[3px] text-[20px] font-normal text-secondary sm:mt-[4px] md:text-[21px] xl:text-[22px]`}
        >
          03.
        </span>

        <h2 className="mr-[10px] whitespace-nowrap text-[26px] font-bold text-main sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
          Some Things I've Built
        </h2>

        <span className="inline-block h-[1px] w-full rounded-md bg-main/90 lg:w-[300px]"></span>
      </div>

      <ul className="mt-[40px] flex flex-col gap-10 md:mt-[80px] md:gap-20 lg:gap-32 2xl:gap-40">
        <li className="relative overflow-hidden rounded-lg px-[24px] py-[30px] md:py-0 lg:px-0">
          <Image
            src={Qpos}
            alt="Qpos"
            loading="eager"
            className="absolute top-0 left-0 z-[-1] h-full w-full rounded-2xl blur-[30px] hover:blur-0 md:bottom-0 md:left-[24px] md:max-w-[calc(60%-24px)] md:blur-[5px] lg:left-0 lg:max-w-[53%]"
          />

          <div>
            <p
              className={`${mono.className} text-[14px] text-secondary md:text-right md:text-[15px]`}
            >
              Featured Project
            </p>
            <h3 className="text-[23px] font-bold text-main md:text-right md:text-[25px] xl:text-[27px]">
              QPOS
            </h3>
            <p className="mt-[30px] text-[16px] md:ml-[40%] md:block md:w-[60%] md:rounded-md md:bg-[#e0e7ff] md:py-[20px] md:px-[30px] md:text-right md:text-[17px] lg:ml-[47%] lg:w-[53%] xl:text-[18px]">
              A full stack app for managing point of sale system built with
              Next.js and Supabase for db an auth.
            </p>

            <ul
              className={`${mono.className} mt-[30px] flex flex-wrap justify-start gap-x-3 text-[14px] leading-[23px] md:justify-end md:text-[15px]`}
            >
              <li>Next.js</li>
              <li>Supabase</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind</li>
            </ul>

            <div className="mt-[16px] ml-[-8px] mb-[-8px] flex items-center justify-start md:ml-0 md:mr-[-8px] md:justify-end">
              <a
                href="https://github.com/davbazz/pos-project"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github h-5 w-5 fill-none hover:stroke-secondary"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://qpos.vercel.app/"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link h-[21px] w-[22px] fill-none hover:stroke-secondary"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li className="relative overflow-hidden rounded-lg px-[24px] py-[30px] md:py-0 lg:px-0">
          <Image
            src={Stocks}
            alt="Stocks"
            loading="eager"
            className="absolute top-0 left-0 z-[-1] h-full w-full rounded-2xl blur-[30px] hover:blur-0 md:bottom-0 md:left-[24px] md:max-w-[calc(60%-24px)] md:blur-[5px] lg:left-0 lg:max-w-[53%]"
          />

          <div>
            <p
              className={`${mono.className} text-[14px] text-secondary md:text-right md:text-[15px]`}
            >
              Featured Project
            </p>
            <h3 className="text-[23px] font-bold text-main md:text-right md:text-[25px] xl:text-[27px]">
              Stock Tracker App
            </h3>
            <p className="mt-[30px] text-[16px] md:ml-[40%] md:block md:w-[60%] md:rounded-md md:bg-[#e0e7ff] md:py-[20px] md:px-[30px] md:text-right md:text-[17px] lg:ml-[47%] lg:w-[53%] xl:text-[18px]">
              An application that allows users receive data on stocks in real
              time, including several price values, daily overall dynamic and
              latest news.
            </p>

            <ul
              className={`${mono.className} mt-[30px] flex flex-wrap justify-start gap-x-3 text-[14px] leading-[23px] md:justify-end md:text-[15px]`}
            >
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Git</li>
              <li>Finnhub API</li>
              <li>Vite</li>
            </ul>

            <div className="mt-[16px] ml-[-8px] mb-[-8px] flex items-center justify-start md:ml-0 md:mr-[-8px] md:justify-end">
              <a
                href="https://github.com/davbazz/stock-tracker"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github h-5 w-5 fill-none hover:stroke-secondary"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://stock-tracker-portfolio.netlify.app"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link h-[21px] w-[22px] fill-none hover:stroke-secondary"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li className="relative overflow-hidden rounded-lg px-[24px] py-[30px] md:py-0 lg:px-0">
          <Image
            src={Game}
            alt="Game"
            loading="eager"
            className="absolute top-0 left-0 z-[-1] h-full w-full rounded-2xl blur-[40px] md:left-[40%] md:max-w-[calc(60%-24px)] md:blur-[5px] lg:left-[47%] lg:max-w-[53%]"
          />

          <div>
            <p
              className={`${mono.className} text-[14px] text-secondary md:text-[15px]`}
            >
              Featured Project
            </p>
            <h3 className="text-[23px] font-bold text-main md:text-[25px] xl:text-[27px]">
              Memory Cards Game
            </h3>
            <p className="mt-[30px] text-[16px] md:block md:w-[60%] md:rounded-md md:bg-[#e0e7ff] md:py-[20px] md:px-[30px] md:text-[17px] lg:w-[53%] xl:text-[18px]">
              A simple game where a user clicks on cards to flip them & remember
              which one is which. The game ends when all cards are mathed. I
              choce Van Gogh art to be the matching pictures.
            </p>

            <ul
              className={`${mono.className} mt-[30px] flex flex-wrap justify-start gap-x-3 text-[14px] leading-[23px] md:text-[15px]`}
            >
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Vite</li>
              <li>Git</li>
            </ul>

            <div className="mt-[16px] ml-[-8px] mb-[-8px] flex items-center justify-start md:mb-0">
              <a
                href="https://github.com/davbazz/memory-cards"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github h-5 w-5 fill-none hover:stroke-secondary"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://memory-cards-portfolio.netlify.app"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link h-[21px] w-[22px] fill-none hover:stroke-secondary"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </li>

        {/* <li className="relative overflow-hidden rounded-lg px-[24px] py-[30px] md:py-0 lg:px-0">
          <Image
            src={Starwars}
            alt="Starwars"
            loading="eager"
            className="absolute top-0 left-0 z-[-1] h-full w-full rounded-2xl blur-[30px] hover:blur-0 md:bottom-0 md:left-[24px] md:max-w-[calc(60%-24px)] md:blur-[5px] lg:left-0 lg:max-w-[53%]"
          />

          <div>
            <p
              className={`${mono.className} text-[14px] text-secondary md:text-right md:text-[15px]`}
            >
              Featured Project
            </p>
            <h3 className="text-[23px] font-bold text-main md:text-right md:text-[25px] xl:text-[27px]">
              Starwars Characters
            </h3>
            <p className="mt-[30px] text-[16px] md:ml-[40%] md:block md:w-[60%] md:rounded-md md:bg-[#e0e7ff] md:py-[20px] md:px-[30px] md:text-right md:text-[17px] lg:ml-[47%] lg:w-[53%] xl:text-[18px]">
              A simple UI empowered by swapi API to search starwars characters
              by their names. The response data comes with name, age and gender.
            </p>

            <ul
              className={`${mono.className} mt-[30px] flex flex-wrap justify-start gap-x-3 text-[14px] leading-[23px] md:justify-end md:text-[15px]`}
            >
              <li>TypeScript</li>
              <li>React</li>
              <li>Swapi API</li>
              <li>CSS</li>
              <li>Vite</li>
              <li>Git</li>
            </ul>

            <div className="mt-[16px] ml-[-8px] mb-[-8px] flex items-center justify-start md:ml-0 md:mr-[-8px] md:justify-end">
              <a
                href="https://github.com/davbazz/starwars-test"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github h-5 w-5 fill-none hover:stroke-secondary"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://starwars-pagination-test.netlify.app"
                target="_blank"
                className="cursor-pointer p-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link h-[21px] w-[22px] fill-none hover:stroke-secondary"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </li> */}
      </ul>
    </section>
  )
}
