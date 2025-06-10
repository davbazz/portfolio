import { parse } from 'node-html-parser'
import type { Metadata } from 'next'

import { getSeoKeywords, slugToTitle } from '@/utils/seo.util'
import pb from '@/utils/pocketbase.util'
import NotFound from '@/app/not-found'
import type { BlogModel } from '@/types/blog.type'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)

  const metadata: Metadata = {
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

  if (!blog) {
    return {
      title: `Not found - ${slugToTitle(slug)}`,
      description: `We couldn't find the page you were looking for. This is either because: There is an error in the URL entered into your web browser. Please check the URL and try again. The page you are looking for has been moved or deleted.`,
      ...metadata,
    }
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: getSeoKeywords(blog.keywords),
    ...metadata,
  }
}

const getBlog = async (slug: string): Promise<BlogModel | null> => {
  try {
    const blog = await pb
      .collection('blogs')
      .getFirstListItem<BlogModel>(`slug = "${slug}"`)
    return blog
  } catch (error) {
    console.log(error)
    return null
  }
}

export default async function BlogSingle({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) return <NotFound />

  const contents = parse(blog.content.split('\r\n').join('')).toString()

  return (
    <section className="single-blog-page">
      <div>
        <h1>{blog.title}</h1>
        <pre>{JSON.stringify(blog, null, 2)}</pre>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </section>
  )
}
