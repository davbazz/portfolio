import Link from 'next/link'

export default function Email() {
  return (
    <aside className="hidden lg:fixed lg:bottom-0 lg:right-[30px] lg:block xl:right-[40px] 2xl:right-[70px]">
      <div className="flex flex-col items-center justify-end gap-8">
        <Link
          href="mailto:codingbazashvili@gmail.com"
          className="vertical-text inline-block text-[16px]"
        >
          codingbazashvili@gmail.com
        </Link>

        <span className="inline-block h-[100px] w-[2px] bg-black" />
      </div>
    </aside>
  )
}
