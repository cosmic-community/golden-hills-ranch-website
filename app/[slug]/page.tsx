// app/[slug]/page.tsx
import { getPage } from '@/lib/cosmic'
import { Page } from '@/types'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {page.metadata?.title || page.title}
        </h1>
        <div 
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: page.metadata?.content || '' }}
        />
      </article>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    return {
      title: 'Page Not Found'
    }
  }

  return {
    title: `${page.metadata?.title || page.title} - Golden Hills Ranch`,
    description: page.metadata?.meta_description || `${page.metadata?.title || page.title} - Golden Hills Ranch`
  }
}