import Image from "next/image"
import Stocks from "../../public/Stocks.png"
import Game from "../../public/Game.png"
import Starwars from "../../public/Starwars.png"

export default function Work() {
	return (
		<section
			className="mx-auto mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] lg:px-[80px] xl:py-[120px] xl:px-[150px] 2xl:max-w-[1140px]"
			id="work"
		>

			<div className="flex flex-nowrap justify-start items-center gap-[8px] md:gap-[13px]">
				<span className="mt-[3px] text-[19px] font-normal sm:mt-[4px] md:text-[20px] xl:text-[21px]">
					03.
				</span>

				<h2 className="whitespace-nowrap mr-[10px] text-[26px] font-bold sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
					Some things I've built
				</h2>

				<span className="inline-block h-[1px] w-full lg:w-[70%] bg-black"></span>
			</div>

			<ul className="flex flex-col gap-10 mt-[40px]">
				<li className="relative px-[24px] py-[30px]">
					<Image 
						src={Stocks} 
						alt="Stocks"
						className="absolute top-0 left-0 h-full w-full z-[-1] blur-[30px]"
					/>

					<div>
						<p className="text-[14px] md:text-[15px]">
							Featured Project
						</p>
						<h3 className="text-[23px] font-bold">
							Stock Tracker App
						</h3>
						<p className="mt-[30px] text-[16px] md:text-[17px] xl:text-[18px]">
							An application that allows users receive data on stocks in real time, including several price values, daily overall dynamic and latest news.
						</p>

						<ul className="flex justify-start flex-wrap gap-x-3 mt-[30px] text-[14px] leading-[23px] md:text-[15px]">
							<li>JavaScript</li>
							<li>React</li>
							<li>Tailwind</li>
							<li>Git</li>
							<li>Finnhub API</li>
							<li>Vite</li>
						</ul>

						<div className="flex justify-start items-center mt-[16px] ml-[-8px] mb-[-8px]">
							<a className="p-[8px] cursor-pointer">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									role="img" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									className="feather feather-github w-5 h-5"
								>
									<title>GitHub</title>
									<path 
										d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
									</path>
								</svg>
							</a>
							<a className="p-[8px] cursor-pointer">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									role="img" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									className="feather feather-external-link w-[22px] h-[21px]"
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

				<li className="relative px-[24px] py-[30px]">
					<Image 
						src={Game} 
						alt="Game"
						className="absolute top-0 left-0 h-full w-full z-[-1] blur-[30px]"
					/>

					<div>
						<p className="text-[14px] md:text-[15px]">
							Featured Project
						</p>
						<h3 className="text-[23px] font-bold">
							Memory Cards Game
						</h3>
						<p className="mt-[30px] text-[16px] md:text-[17px] xl:text-[18px]">
							A simple game where a user clicks on cards to flip them & remember which one is which. The game ends when all cards are mathed. I choce Van Gogh art to be the matching pictures.
						</p>

						<ul className="flex justify-start flex-wrap gap-x-3 mt-[30px] text-[14px] leading-[23px] md:text-[15px]">
							<li>JavaScript</li>
							<li>React</li>
							<li>Tailwind</li>
							<li>Vite</li>
							<li>Git</li>
						</ul>

						<div className="flex justify-start items-center mt-[16px] ml-[-8px] mb-[-8px]">
							<a className="p-[8px] cursor-pointer">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									role="img" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									className="feather feather-github w-5 h-5"
								>
									<title>GitHub</title>
									<path 
										d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
									</path>
								</svg>
							</a>
							<a className="p-[8px] cursor-pointer">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									role="img" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									className="feather feather-external-link w-[22px] h-[21px]"
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

				<li className="relative px-[24px] py-[30px]">
					<Image 
						src={Starwars} 
						alt="Starwars"
						className="absolute top-0 left-0 h-full w-full z-[-1] blur-[10px]"
					/>

					<div>
						<p className="text-[14px] md:text-[15px]">
							Featured Project
						</p>
						<h3 className="text-[23px] font-bold">
							Starwars Characters
						</h3>
						<p className="mt-[30px] text-[16px] md:text-[17px] xl:text-[18px]">
							A simple website to look for starwars characters
						</p>

						<ul className="flex justify-start flex-wrap gap-x-3 mt-[30px] text-[14px] leading-[23px] md:text-[15px]">
							<li>TypeScript</li>
							<li>React</li>
							<li>Swapi API</li>
							<li>CSS</li>
							<li>Vite</li>
							<li>Git</li>
						</ul>
						<div className="flex justify-start items-center mt-[16px] ml-[-8px] mb-[-8px]">
							<a className="p-[8px] cursor-pointer">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									role="img" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									className="feather feather-github w-5 h-5"
								>
									<title>GitHub</title>
									<path 
										d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
									</path>
								</svg>
							</a>
							<a className="p-[8px] cursor-pointer">
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									role="img" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									className="feather feather-external-link w-[22px] h-[21px]"
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
			</ul>

		</section>
	)
}