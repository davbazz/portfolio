'use client'

import PocketBase from "pocketbase"
import { useState } from 'react'
import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Playground() {
	const [item, setItem] = useState<any>()

	async function getItem() {
		const res = await fetch('https://fakestoreapi.com/products/1')
		const data = await res.json()
		const trim = {
			category: data.category, 
			description: data.description, 
			image: data.image,
			price: data.price,
			title: data.title
		}
		console.log(trim)
		setItem(trim)
	}

	async function createItem() {
		const pb = new PocketBase('http://127.0.0.1:8090')
		const create = await pb.collection('products').create(item)
		return create
	}

	return (
		<section
			className="mx-auto mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] lg:px-[80px] xl:py-[120px] xl:px-[150px] 2xl:max-w-[1140px] 2xl:px-0"
      id="playground"
		>
			<div className="flex flex-nowrap items-center justify-start gap-[2px] md:gap-[5px]">
        <span
          className={`${mono.className} mt-[3px] text-[20px] font-normal sm:mt-[4px] md:text-[21px] xl:text-[22px]`}
        >
          04.
        </span>

        <h2 className="mr-[10px] whitespace-nowrap text-[26px] font-bold sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
          Playground
        </h2>

        <span className="inline-block h-[1px] w-full bg-black lg:w-[300px]"></span>
      </div>

			<h2 className={`${mono.className} ml-[2px] text-[17px] md:text-[18px]`}>
				API & Database
			</h2>
			<p>
				In this section there is a simple demonstration of some of the API & Database functionalities. Let's begin with API.
			</p>

			<div>
				<p>
					When using internet, we may not notice it but computer programs talk to each other for the sake of giving or receiving information. Let's see it on practice. Say, we want to open e-commerce store, but our goods isn'tready for production. In this case we can use a fake-store API to fill in the UI.
				</p>

				<code>
					async function getItem() {'{'}
					<br/>
					const res = await fetch('https://fakestoreapi.com/products/1') 
					<br/>
					const data = await res.json()
					<br/>
					const trim = {'{'} 
					<br/>
					category: data.category, 
					<br/>
					descr: data.description, 
					<br/>
					img: data.image,
					<br/>
					price: data.price,
					<br/>
					title: data.title
					<br/>
					{'}'}
					<br/>
					setItem(trim)
					<br/>
					{'}'}			
				</code>

				<p>Click on the button to see result</p>

				<button onClick={getItem}>
					fetch data
				</button>

				{item && 
					<div>
						<div>
							<img src={item.image} alt="image" loading="eager" width={'100%'} height={'100%'}/>
						</div>
						<div>
							<p>{item.title}</p>
							<p>{item.description}</p>
						</div>
					</div>
				}

				<p>Great, now that we know how to use the API, let's take a look at database!</p>



				<button onClick={createItem}>
					create item
				</button>

			</div>
		</section>
	)
}