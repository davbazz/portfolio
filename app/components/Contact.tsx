import Link from "next/link"

export default function Contact() {
	return (
		<section 
			className="mx-auto mt-[20px] py-[40px] sm:py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px] 2xl:max-w-[1140px]"
			id="contact"
		>
			<div className="mx-auto flex flex-col justify-center">
				<div className="flex flex-nowrap items-end justify-center gap-[8px] md:gap-[13px] leading-[26px]">
					<span className="text-[15px] font-normal sm:mt-[4px] md:text-[18px] lg:text-[19px] xl:text-[20px]">
						05.
					</span>

					<h2 className="mr-[10px] whitespace-nowrap text-[17px] sm:mr-[10px] md:text-[18px] lg:text-[19px] xl:text-[20px]">
						What's Next?
					</h2>
				</div>

				<p className="text-center mt-[5px] md:mt-[10px] text-[34px] font-bold sm:mr-[10px] md:text-[38px] lg:text-[42px] xl:text-[46px]">
					Get In Touch
				</p>

				<p className="text-center text-[16px] mt-[12px] md:mt-[20px] md:inline-block md:max-w-[80%] md:mx-auto md:text-[17px] lg:max-w-[600px] xl:text-[18px]">
					I'm curently looking for new opportunities in Front-End / Full-Stack development and I'd be glad to bring my expertise and personality to your business! Don't hesitate to reach out to me!
				</p>
				
				<Link 
					href="mailto:codingbazashvili@gmail.com"
					className="inline-block mx-auto mt-[40px] md:mt-[50px] px-[30px] py-[15px] border-2 border-black rounded-md text-[16px] md:text-[17px] xl:text-[18px]"
				>
					Email Me
				</Link>
			</div>
		</section>
)
}