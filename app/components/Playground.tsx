'use client'

import PocketBase from 'pocketbase'
import { useState } from 'react'
import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Playground() {
  const [item, setItem] = useState<any>()
  const [created, setCreated] = useState<any>()
  const [dbItem, setDbItem] = useState<any>()

  // const pb = new PocketBase('http://127.0.0.1:8090') for real database connection

  async function getData() {
    const res = await fetch('https://fakestoreapi.com/products/1')
    const data = await res.json()
    const trim = {
      category: data.category,
      description: data.description,
      image: data.image,
      price: data.price,
      title: data.title,
    }
    setItem(trim)
  }

  // real database envolvment example

  // async function createItem() {
  // 	const create = await pb.collection('products').create(item)
  // 	console.log(item)
  // 	setCreated(item)
  // 	return create
  // }

  // no database envolvment
  async function createItem() {
    setCreated(item)
  }

  // real database envolvment

  // async function getItem() {
  // 	const get = await pb.collection('products').getOne('6j1zez1meaumlrh')
  // 	setDbItem(get)
  // 	return get
  // }

  // no database envolvment
  async function getItem() {
    setDbItem(item)
  }

  return (
    <section
      className="mx-auto mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] lg:px-[80px] xl:py-[120px] xl:px-[150px] 2xl:max-w-[1140px] 2xl:px-0"
      id="playground"
    >
      <div className="flex flex-nowrap items-center justify-start gap-[2px] md:gap-[5px]">
        <span
          className={`${mono.className} mt-[3px] text-[20px] font-normal sm:mt-[4px] md:text-[21px] xl:text-[22px] text-secondary`}
        >
          04.
        </span>

        <h2 className="mr-[10px] whitespace-nowrap text-[26px] font-bold sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px] text-main">
          Playground
        </h2>

        <span className="inline-block h-[1px] w-full bg-main/80 lg:w-[300px]"></span>
      </div>

      <h2 className={`${mono.className} mt-[40px] text-[17px] md:text-[18px] text-secondary`}>
        API & Database
      </h2>

      <div className="ml-[-24px] mt-[40px] flex w-[calc(100%+48px)] flex-col gap-10 rounded-md bg-[#e0e7ff] p-6 text-[16px] sm:ml-0 sm:w-full md:text-[17px] xl:text-[18px]">
        <p className="text-[17px] md:text-[18px]">
          In this section there is a simple demonstration of some of the{' '}
          <span className={`${mono.className} text-secondary`}>API & Database</span>{' '}
          functionalities. Let's begin with API.
        </p>

        <p>
          When using internet, we may not notice it but computer programs talk
          to each other for the sake of giving or receiving information.
        </p>

        <p>
          Let's see it on practice. Say, we want to open e-commerce store, but
          our goods isn't ready for production. In this case we can use a
          fake-store <span className={`${mono.className}`}>API</span> to fill in
          the <span className={`${mono.className}`}>UI</span>.
        </p>

        <code
          className={`${mono.className} overflow-x-scroll whitespace-nowrap rounded-md bg-slate-100 p-4`}
        >
          async function getData() {'{'}
          <br />
          <span className="ml-[20px]">
            const res = await fetch('https://fakestoreapi.com/products/1')
          </span>
          <br />
          <span className="ml-[20px]">const data = await res.json()</span>
          <br />
          <span className="ml-[20px]">const trim = {'{'}</span>
          <br />
          <span className="ml-[40px]">category: data.category,</span>
          <br />
          <span className="ml-[40px]">descr: data.description,</span>
          <br />
          <span className="ml-[40px]">img: data.image,</span>
          <br />
          <span className="ml-[40px]">price: data.price,</span>
          <br />
          <span className="ml-[40px]">title: data.title</span>
          <br />
          <span className="ml-[20px]">{'}'}</span>
          <br />
          <span className="ml-[20px]">setItem(trim)</span>
          <br />
          {'}'}
        </code>

        <div className="mx-auto flex items-center justify-start gap-4 whitespace-nowrap">
          <p>{item ? 'Fetched' : 'Fetch Data'}</p>

          <div onClick={getData} className="cursor-pointer">
            {item ? (
              <div className="rounded-md border-2 border-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-check-lg h-4 w-4"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            ) : (
              <div className="rounded-md border-2 border-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-down-up h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {item && (
          <div className="flex flex-col justify-between gap-8 rounded-md bg-white p-4 sm:mx-auto sm:max-w-[550px] sm:flex-row sm:gap-12 md:w-[70%] md:min-w-[550px]">
            <div className="mx-auto w-[64%] max-w-[220px] sm:w-[30%]">
              <img
                src={item.image}
                alt="image"
                loading="eager"
                width={'100%'}
                height={'100%'}
                className="mx-auto rounded-md"
              />
            </div>
            <div className="sm:flex sm:w-[70%] sm:flex-col sm:justify-between">
              <p className={`font-semibold`}>{item.title}</p>
              <p className="mt-[20px] text-[14px] sm:mt-[-30px] md:mt-0 md:text-[15px]">
                {item.description}
              </p>
              <p className="mt-[30px] text-[14px] font-semibold sm:mr-[10px] sm:mt-0 sm:text-right md:text-[15px]">
                {item.price}$
              </p>
            </div>
          </div>
        )}

        <p>
          Great, now that we know how to use the API, let's take a look at
          database!
        </p>

        <p>
          Finally, our goods are ready for production and we want to use them on
          the website. The question is, how where do we deploy this information
          and how do we access will user get access to it on the website?
        </p>

        <p>
          The answer would be is to use a database. We can structurise the
          nessesary data and deploy it to one of the multiple resources out
          there. For this example i'll go with PocketBase.
        </p>

        <p>
          Lets create a product in the database. For cpnviniece I'll use same
          data we receive from the API
        </p>

        <code className="overflow-x-scroll whitespace-nowrap rounded-md bg-slate-100 p-4">
          async function createItem() {'{'}
          <br />
          <span className="ml-[20px]">
            const pb = new PocketBase('http://127.0.0.1:8090')
          </span>
          <br />
          <span className="ml-[20px]">
            const create = await pb.collection('products').create(item)
          </span>
          <br />
          <span className="ml-[20px]">return create</span>
          <br />
          {'}'}
        </code>

        <div className="mx-auto flex items-center justify-start gap-4">
          <p>{created ? 'Created' : 'Create Product'}</p>

          <div onClick={createItem} className="cursor-pointer">
            {created ? (
              <div className="rounded-md border-2 border-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-check-lg h-4 w-4"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            ) : (
              <div className="rounded-md border-2 border-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-down-up h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {created && (
          <code className="overflow-x-scroll rounded-md bg-slate-100 p-4">
            <span className="whitespace-nowrap">
              category: "men's clothing"
            </span>
            <br />
            <span className="whitespace-nowrap">
              description: "Your perfect pack for everyday use and walks in the
              forest. Stash your laptop (up to 15 inches) in the padded sleeve,
              your everyday"
            </span>
            <br />
            <span className="whitespace-nowrap">
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            </span>
            <br />
            <span className="whitespace-nowrap">
              price: 109.95title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15
              Laptops"
            </span>
          </code>
        )}

        <p>
          Here's what we sent to the Database. Now we can retrieve data from
          data base and put it in our UI
        </p>

        <code className="overflow-x-scroll whitespace-nowrap rounded-md bg-slate-100 p-4">
          async function getItem() {'{'}
          <br />
          <span className="ml-[20px]">
            const get = await
            pb.collection('products').getOne('6j1zez1meaumlrh')
          </span>
          <br />
          <span className="ml-[20px]">setDbItem(get)</span>
          <br />
          <span className="ml-[20px]">return get</span>
          <br />
          {'}'}
        </code>

        <div className="mx-auto flex items-center justify-start gap-4">
          <p>{dbItem ? 'Fetched' : 'Fetch Product'}</p>

          <div onClick={getItem} className="cursor-pointer">
            {dbItem ? (
              <div className="rounded-md border-2 border-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-check-lg h-4 w-4"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            ) : (
              <div className="rounded-md border-2 border-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-down-up h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {dbItem && (
          <div className="flex flex-col justify-between gap-8 rounded-md bg-white p-4 sm:mx-auto sm:max-w-[550px] sm:flex-row sm:gap-12 md:w-[70%] md:min-w-[550px]">
		  <div className="mx-auto w-[64%] max-w-[220px] sm:w-[30%]">
			<img
			  src={item.image}
			  alt="image"
			  loading="eager"
			  width={'100%'}
			  height={'100%'}
			  className="mx-auto rounded-md"
			/>
		  </div>
		  <div className="sm:flex sm:w-[70%] sm:flex-col sm:justify-between">
			<p className={`font-semibold`}>{item.title}</p>
			<p className="mt-[20px] text-[14px] sm:mt-[-30px] md:mt-0 md:text-[15px]">
			  {item.description}
			</p>
			<p className="mt-[30px] text-[14px] font-semibold sm:mr-[10px] sm:mt-0 sm:text-right md:text-[15px]">
			  {item.price}$
			</p>
		  </div>
		</div>
        )}

        <p>
          Great! There is much more to tell about API's & Databases, contact me
          if you want know more!
        </p>
      </div>
    </section>
  )
}
