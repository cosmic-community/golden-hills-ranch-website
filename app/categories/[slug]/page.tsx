// app/categories/[slug]/page.tsx
import { getCategory, getProductsByCategory } from '@/lib/cosmic'
import { Category, Product } from '@/types'
import { notFound } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const [category, products] = await Promise.all([
    getCategory(slug),
    getProductsByCategory(slug)
  ])

  if (!category) {
    notFound()
  }

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {category.metadata?.name || category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-gray-600 max-w-2xl mx-auto">
            {category.metadata.description}
          </p>
        )}
      </div>

      <ProductGrid products={products as Product[]} />
    </div>
  )
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return {
      title: 'Category Not Found'
    }
  }

  return {
    title: `${category.metadata?.name || category.title} - Golden Hills Ranch`,
    description: category.metadata?.description || `Shop ${category.title} at Golden Hills Ranch.`
  }
}