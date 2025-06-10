'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { toDate } from '@/utils/datetime.util'
import LinkTo from '@/components/link'
import type { BlogModel } from '@/types/blog.type'

export default function Blog({ title, slug, description, created }: BlogModel) {
  const router = useRouter()

  return (
    <article className="blog-component group">
      <div className="dot group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
      <svg className="dot-svg" viewBox="0 0 9 9">
        <circle
          cx="4.5"
          cy="4.5"
          r="4.5"
          stroke="currentColor"
          stroke-width="2"
        ></circle>
      </svg>

      <Link
        href={`/blog/${slug}`}
        onMouseEnter={() => router.prefetch(`/blog/${slug}`)}
      >
        <div className="content">
          <h3 className="title">{title}</h3>
          <div className="description prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark">
            <p>{description}</p>
          </div>
          <dl>
            <dt className="sr-only">Date</dt>
            <dd>
              <time dateTime={created}>{toDate(created)}</time>
            </dd>
          </dl>
        </div>
      </Link>

      <LinkTo className="link link-component" url={`/blog/${slug}`}>
        <span>
          {' '}
          Read more <span>, {title}</span>
        </span>
        <svg
          className="arrow-right"
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </LinkTo>
    </article>
  )
}
