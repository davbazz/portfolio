import Image from 'next/image'
import photo from '../../public/David.jpg'

export default function About() {
  return (
    <section
      className="mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[120px] lg:mt-[50px] lg:max-w-[74%] xl:max-w-[68%] lg:mx-auto xl:mt-[100px] 2xl:max-w-[1000px]"
      id="about"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[5%]">
        <div className="lg:w-[60%]">
          <div className="flex flex-nowrap items-center justify-start gap-[8px] md:gap-[13px]">
            <span className="mt-[3px] text-[19px] font-normal sm:mt-[4px] md:text-[20px] xl:text-[21px]">
              01.
            </span>
            <h2 className="whitespace-nowrap mr-[10px] text-[26px] font-bold sm:mr-[10px] sm:text-[28px] lg:text-[30px] xl:text-[32px]">
              About Me
            </h2>
            <span className="inline-block h-[1px] w-full bg-black "></span>
          </div>

          <p className="mt-[40px] text-[16px] md:text-[17px] xl:text-[18px]">
            Hello! My name is David Bazashvili and I'm all about crafting unique
            web products that leave a lasting impression. My interest in
            computers began at a tender age of 12, and I was instantly hooked.
            The sheer power of this tool to create, learn, entertain and connect
            with others was too good to resist.
          </p>
          <p className="mt-[20px] text-[16px] md:text-[17px] xl:text-[18px]">
            Despite spending countless hours on my computer, I never imagined
            that I would become a programmer. It wasn't until a couple of years
            ago when I decided to take the plunge and learn HTML and CSS that my
            interest in programming truly began to blossom.
          </p>
          <p className="mt-[20px] text-[16px] md:text-[17px] xl:text-[18px]">
            Fast forward to 2023, and I've come a long way since those early
            days. I now have experience building full-stack applications using
            cutting-edge technologies like React, Node.js, and APIs. Along the
            way, I've had the opportunity to work for a prestigious jewellery
            brand based in Hatton Garden.
          </p>
          <p className="mt-[20px] text-[16px] md:text-[17px] xl:text-[18px]">
            But my journey doesn't end here. My passion for learning and keeping
            up with the latest technologies drives me to continue to improve my
            skills. After all, the world of programming is constantly evolving,
            and I'm excited to see where this journey takes me next.
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
          <div className="photo relative mx-auto mt-[50px] w-[70%] max-w-[280px] rounded-md sm:max-w-[320px] lg:mx-0 lg:mt-[87px] lg:w-full lg:max-w-[320px]">
            <Image src={photo} alt="David's photo" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
