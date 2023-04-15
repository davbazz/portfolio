import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-[40px] sm:py-[70px] lg:px-[80px] xl:px-[150px] 2xl:mx-auto 2xl:max-w-[1140px] 2xl:py-[50px] xl:mt-[50px] 2xl:mt-[100px] 2xl:px-0">
      <h2 className="ml-[2px] text-[17px] md:text-[18px]">Hi, my name is</h2>

      <h1 className="mt-[20px] text-[40px] font-[800] leading-[46px] sm:text-[50px] sm:leading-[56px] md:mt-[30px] md:text-[58px] md:leading-[64px] lg:text-[64px] lg:leading-[70px] xl:mt-[40px] xl:text-[72px] xl:leading-[80px]">
        David Bazashvili.
      </h1>

      <h2 className="mt-[5px] text-[40px] font-[800] leading-[46px] sm:text-[50px] sm:leading-[56px] md:text-[58px] md:leading-[64px] lg:text-[64px] lg:leading-[70px] xl:text-[72px] xl:leading-[80px]">
        I build things for the web.
      </h2>

      <p className="mt-[20px] max-w-[630px] text-[16px] md:mt-[30px] md:text-[17px] xl:text-[18px] lg:mt-[40px] xl:mt-[50px]">
        I'm a software engineer specialising in Front End development with
        extensive knowledge of the Back End. Currently, I'm looking for new
        opportunities, and I'd be glad to bring my expertise to your business.
      </p>

      <div className="mt-[40px] w-full max-w-[270px] rounded-md border-2 border-black md:mt-[50px] xl:mt-[60px]">
        <Link
          href="#contact"
          className="block w-full py-[12px] text-center text-[17px] md:text-[18px]"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}
