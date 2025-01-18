import Link from 'next/link'
import { DM_Mono } from 'next/font/google'

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function Email() {
  return (
    <aside className="hidden text-main/80 duration-200 hover:text-secondary lg:fixed lg:bottom-0 lg:right-[30px] lg:block xl:right-[40px] 2xl:right-[70px]">
      <div className="flex flex-col items-center justify-end gap-8">
        <Link
          href="mailto:codingbazashvili@gmail.com"
          className={`${mono.className} vertical-text inline-block text-[16px]`}
        >
          codingbazashvili@gmail.com
        </Link>

        <span className="inline-block h-[100px] w-[2px] bg-main/80" />
      </div>
    </aside>
  )
}
