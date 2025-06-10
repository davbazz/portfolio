'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import type { LinkModel } from '@/types/link.type'

export default function LinkTo({ url, children, ...props }: LinkModel) {
  const router = useRouter()

  return (
    <Link
      className="link-component"
      onMouseEnter={() => router.prefetch(url)}
      href={url}
      {...props}
    >
      {children}
    </Link>
  )
}
