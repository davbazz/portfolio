import Image from 'next/image'
import photo from '../../public/David.jpg'

export default function About() {
  return (
    <section
      className="mt-[60px] sm:mt-[100px] lg:mt-[120px] xl:mt-[150px] 2xl:mt-[200px] py-[80px] lg:px-[80px] xl:px-[150px] 2xl:mx-auto 2xl:max-w-[1140px] 2xl:py-[50px] 2xl:px-0"
      id="about"
    >
      <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-[5%]'>
        <div className='lg:w-[60%]'>
          <div className='flex justify-start items-center gap-[10px] md:gap-[13px] flex-nowrap'>
            <span 
              className="text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] font-normal mt-[3px] sm:mt-[4px]"
            >
              01. 
            </span>
            <h2
              className="whitespace-nowrap text-[21px] sm:text-[26px] lg:text-[28px] xl:text-[30px] sm:mr-[10px] font-semibold"
            >
              About Me
            </h2>
            <span 
              className='inline-block w-full h-[1px] bg-black '
            >
            </span>
          </div>

          <p className='mt-[40px] text-[16px] md:text-[17px] xl:text-[18px]'>
            Hello! My name is David Bazashvili and I'm all about crafting unique
            web products that leave a lasting impression. My interest in computers
            began at a tender age of 12, and I was instantly hooked. The sheer
            power of this tool to create, learn, entertain and connect with others
            was too good to resist.
          </p>
          <p className='mt-[20px] text-[16px] md:text-[17px] xl:text-[18px]'>
            Despite spending countless hours on my computer, I never imagined that I would become a programmer. It wasn't until a couple of years ago when I decided to take the plunge and learn HTML and CSS that my interest in programming truly began to blossom.
          </p>
          <p className='mt-[20px] text-[16px] md:text-[17px] xl:text-[18px]'>
            Fast forward to 2023, and I've come a long way since those
            early days. I now have experience building full-stack applications
            using cutting-edge technologies like React, Node.js, and APIs. Along
            the way, I've had the opportunity to work for a prestigious jewellery
            brand based in Hatton Garden.
          </p>
          <p className='mt-[20px] text-[16px] md:text-[17px] xl:text-[18px]'>
            But my journey doesn't end here. My passion for learning and keeping up with the latest technologies drives me to continue to improve my skills. After all, the world of programming is constantly evolving, and I'm excited to see where this journey takes me next.
          </p>
          {/* <p className='mt-[20px] text-[16px] md:text-[18px]'>
            If you're interested in learning more about the technologies I've been
            working with recently, here's a short list:
          </p> */}

          {/* <div>
            <ul>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Next.js</li>
              <li>API's</li>
            </ul>

            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Databases</li>
            </ul>
          </div> */}
        </div>

        <div className="lg:w-[35%]">
          <div className='photo relative mx-auto lg:mx-0 w-[70%] lg:w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[320px] rounded-md mt-[50px] lg:mt-[87px]'>
            <Image 
              src={photo} 
              alt="David's photo" 
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
