import Link from 'next/link'
import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Contact() {
  return (
    <section
      className="mx-auto mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px] 2xl:max-w-[1140px]"
      id="contact"
    >
      <div className="mx-auto flex flex-col justify-center">
        <div
          className={`${mono.className} flex flex-nowrap items-end justify-center gap-[8px] leading-[26px] md:gap-[13px]`}
        >
          <span className="text-[15px] font-normal sm:mt-[4px] md:text-[18px] lg:text-[19px] xl:text-[20px]">
            05.
          </span>

          <h2 className="mr-[10px] whitespace-nowrap text-[17px] sm:mr-[10px] md:text-[18px] lg:text-[19px] xl:text-[20px]">
            What's Next?
          </h2>
        </div>

        <p className="mt-[5px] text-center text-[36px] font-bold sm:mr-[10px] md:mt-[10px] md:text-[40px] lg:text-[44px] xl:text-[48px]">
          Get In Touch
        </p>

        <p className="mt-[12px] text-center text-[16px] md:mx-auto md:mt-[20px] md:inline-block md:max-w-[80%] md:text-[17px] lg:max-w-[600px] xl:text-[18px]">
          I'm curently looking for new opportunities in Front-End / Full-Stack
          development and I'd be glad to bring my expertise and personality to
          your business! Don't hesitate to reach out to me!
        </p>

        <Link
          href="mailto:codingbazashvili@gmail.com"
          className={`${mono.className} mx-auto mt-[40px] inline-block rounded-md border-2 border-black px-[30px] py-[15px] text-[16px] md:mt-[50px] md:text-[17px] xl:text-[18px]`}
        >
          Email Me
        </Link>
      </div>
    </section>
  )
}
