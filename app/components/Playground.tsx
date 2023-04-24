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
	const [dbItem, setDbItem] = useState<any>()

	const pb = new PocketBase('http://127.0.0.1:8090')

	async function getData() {
		const res = await fetch('https://fakestoreapi.com/products/1')
		const data = await res.json()
		const trim = {
			category: data.category, 
			description: data.description, 
			image: data.image,
			price: data.price,
			title: data.title
		}
		setItem(trim)
	}

	async function createItem() {
		const create = await pb.collection('products').create(item)
		return create
	}

	async function getItem() {
		const get = await pb.collection('products').getOne('6j1zez1meaumlrh')
		setDbItem(get)
		return get
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

			<h2 className={`${mono.className} mt-[40px] text-[17px] md:text-[18px]`}>
				API & Database
			</h2>

			<div className="flex flex-col gap-10 bg-slate-300 rounded-md p-4 mt-[40px] text-[16px] md:text-[17px] xl:text-[18px]">
				<p className="text-[17px] md:text-[18px]">
					In this section there is a simple demonstration of some of the <span className={`${mono.className}`}>API & Database</span> functionalities. Let's begin with API.
				</p>

				<p>
					When using internet, we may not notice it but computer programs talk to each other for the sake of giving or receiving information. Let's see it on practice. Say, we want to open e-commerce store, but our goods isn'tready for production. In this case we can use a fake-store <span className={`${mono.className}`}>API</span> to fill in the <span className={`${mono.className}`}>UI</span>.
				</p>

				<code className="overflow-x-scroll bg-slate-100 rounded-md p-4">
					async function getData() {'{'}
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

				<button onClick={getData}>
					fetch data
				</button>

				{item && 
					<div className="flex flex-col justify-between gap-8 p-4 bg-white rounded-md">
						<div>
							<img 
								src={item.image} 
								alt="image" 
								loading="eager" 
								width={'64%'} height={'100%'}
								className="rounded-md mx-auto max-w-[260px]"
							/>
						</div>
						<div className="">
							<p className={`font-semibold`}>
								{item.title}
							</p>
							<p className="mt-[20px] text-[14px] md:text-[15px]">
								{item.description}
							</p>
							<p className="mt-[30px] text-[14px] md:text-[15px] font-semibold">
								{item.price}$
							</p>
						</div>
					</div>
				}

				<p>
					Great, now that we know how to use the API, let's take a look at database!
				</p>
				
				<p>
					Finally, our goods are ready for production and we want to use them on the website. The question is, how where do we deploy this information and how do we access will user get access to it on the website?
				</p>

				<p>
					The answer would be is to use a database. We can structurise the nessesary data and deploy it to one of the multiple resources out there. For this example i'll go with PocketBase.
				</p>

				<p>Lets create a product in the database. For cpnviniece I'll use same data we receive from the API</p>

				<code className="overflow-x-scroll bg-slate-100 rounded-md p-4">
					async function createItem() {'{'}
					<br/>
					const pb = new PocketBase('http://127.0.0.1:8090')
					<br/>
					const create = await pb.collection('products').create(item)
					<br/>
					return create
					<br/>
					{'}'}
				</code>

				<button onClick={createItem}>
					create item
				</button>

				<p>Now we can retrieve data from data base and put in in our UI</p>

				<code className="overflow-x-scroll bg-slate-100 rounded-md p-4">
					async function getItem() {'{'}
					<br/>
					const get = await pb.collection('products').getOne('6j1zez1meaumlrh')
					<br/>
					setDbItem(get)
					<br/>
					return get
					<br/>
					{'}'}
				</code>

				<button onClick={getItem}>
					get data
				</button>

				{dbItem && 
					<div className="flex flex-col justify-between gap-8 p-4 bg-white rounded-md">
						<div>
							<img 
								src={dbItem.image} 
								alt="image" 
								loading="eager" 
								width={'64%'} height={'100%'}
								className="rounded-md mx-auto max-w-[260px]"
							/>
						</div>
						<div className="">
							<p className={`font-semibold`}>
								{dbItem.title}
							</p>
							<p className="mt-[20px] text-[14px] md:text-[15px]">
								{dbItem.description}
							</p>
							<p className="mt-[30px] text-[14px] md:text-[15px] font-semibold">
								{dbItem.price}$
							</p>
						</div>
					</div>
				}

				<p>
					Great! There is much more to tell about API's & Databases, contact me if you want know more!
				</p>

			</div>
		</section>
	)
}