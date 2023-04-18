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

// changes

export default function Skills() {
	return (
		<section
			className="mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] lg:max-w-[64%] lg:mx-auto xl:py-[120px] xl:max-w-[58%] 2xl:max-w-[800px]"
			id="skills"
		>
			<div className="flex flex-nowrap justify-start items-center gap-[8px] md:gap-[13px]">
				<span className="mt-[3px] text-[19px] font-normal sm:mt-[4px] md:text-[20px] xl:text-[21px]">
					02.
				</span>
				<h2 className="whitespace-nowrap mr-[10px] text-[26px] font-semibold sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
					Skills
				</h2>
				<span className="inline-block h-[1px] w-full lg:w-[70%] bg-black"></span>
			</div>

			<p className='mt-[40px] text-[17px] md:text-[18px]'>
				Here are some of the technologies I use:
			</p>

			<div className='flex flex-col md:flex-row gap-8 mt-[40px] text-[16px] md:text-[17px] xl:text-[18px]'>
				<ul className='flex flex-col gap-8'>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={JavaScript} alt={`JavaScript`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>1 year</p>
							<p><span className='italic'>JavaScript</span> - a programming language</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={HTML} alt={`HTML`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>2 years</p>
							<p><span className='italic'>HTML</span> - a mark up language</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={CSS} alt={`CSS`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>2 years</p>
							<p><span className='italic'>CSS</span> - a stylesheet language</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={React} alt={`React`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>						
							<p className='font-semibold'>1 year</p>
							<p><span className='italic'>React</span> - a JavaScript library for building Front-End</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={Next} alt={`Next.js`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>1 year</p>
							<p><span className='italic'>Next.js</span> - a React framework for building Front-End and Back-End</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={Node} alt={`Node.js`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>							
							<p className='font-semibold'>{`<`}1 year</p>
							<p><span className='italic'>Node.js</span> - a Back-End JavaScript runtime</p>
						</div>
					</li>
				</ul>

				<ul className='flex flex-col gap-8'>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={TypeScript} alt={`TypeScript`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>							
							<p className='font-semibold'>{`<`}1 year</p>
							<p><span className='italic'>TypeScript</span> - a programming language</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={Go} alt={`Go`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>{`<`}1 year</p>
							<p><span className='italic'>Golang</span> - a programming language</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={Tailwind} alt={`Tailwind`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>1 year</p>
							<p><span className='italic'>Tailwind</span> - a CSS framework</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={Git} alt={`Git`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>
							<p className='font-semibold'>2 years</p>
							<p><span className='italic'>Git</span> - a version control system</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={API} alt={`API`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>	
							<p className='font-semibold'>1 year</p>
							<p><span className='italic'>API's</span> - a way for programs to communicate with each other</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-6">
						<div className='w-16 h-16'>
							<Image src={Database} alt={`Database`} className='w-16 h-16'/>
						</div>
						<div className='max-w-[calc(100%-88px)]'>	
							<p className='font-semibold'>1 year</p>
							<p><span className='italic'>Database</span> - a collection of data stored and accessed electronically</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}