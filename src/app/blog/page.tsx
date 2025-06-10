import type { Metadata } from 'next'

import pb from '@/utils/pocketbase.util'
import Blog from '@/components/blog'
import type { BlogModel } from '@/types/blog.type'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read more blogs about front end and back end development written by a software engineer.',
  authors: [
    {
      name: 'David Bazashvili',
      url: 'https://www.linkedin.com/in/davidbazashvili/',
    },
  ],
  creator: 'David Bazashvili',
  publisher: 'David Bazashvili',
  twitter: {
    card: 'summary_large_image',
  },
}

const getBlogs = async (): Promise<BlogModel[]> => {
  try {
    const blogs = await pb.collection('blogs').getFullList<BlogModel>({
      sort: '-created',
    })
    return blogs
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <section className="blog-page">
      <header>
        <h1>Blog</h1>
        <p>All the latest Tailwind CSS news, straight from the&nbsp;team.</p>
      </header>

      <div className="list">
        <div className="helper"></div>
        <div className="blogs-wrapper">
          {blogs.map((blog) => (
            <Blog key={blog.id} {...blog} />
          ))}

          <article className="group relative">
            <div className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50/70 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4 dark:group-hover:bg-slate-800/50"></div>
            <svg
              viewBox="0 0 9 9"
              className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 sm:block md:mr-12 dark:text-slate-600"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="4.5"
                stroke="currentColor"
                className="fill-white dark:fill-slate-900"
                stroke-width="2"
              ></circle>
            </svg>
            <div className="relative">
              <h3 className="pt-8 text-base font-semibold tracking-tight text-slate-900 lg:pt-0 dark:text-slate-200">
                Tailwind CSS v4.0 Beta 1
              </h3>
              <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark mb-4 mt-2 line-clamp-2">
                <p>
                  About eight months ago we{' '}
                  <a href="https://v3.tailwindcss.com//blog/tailwindcss-v4-alpha">
                    open-sourced our progress
                  </a>{' '}
                  on Tailwind CSS v4.0. Hundreds of hours of fixing bugs,
                  soul-crushing backward compatibility work, and troubleshooting
                  Windows CI failures later, I’m excited to finally tag the
                  first public beta release.
                </p>
              </div>
              <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                <dt className="sr-only">Date</dt>
                <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                  <time dateTime="2024-11-21T18:30:00.000Z">
                    November 21, 2024
                  </time>
                </dd>
              </dl>
            </div>
            <a
              className="flex items-center text-sm font-medium text-sky-500"
              href="/blog/tailwindcss-v4-beta"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"></span>
              <span className="relative">
                Read more
                <span className="sr-only">, Tailwind CSS v4.0 Beta 1</span>
              </span>
              <svg
                className="relative ml-2.5 mt-px overflow-visible text-sky-300 dark:text-sky-700"
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
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
