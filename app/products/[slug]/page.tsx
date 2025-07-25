// app/products/[slug]/page.tsx
import { getProduct } from '@/lib/cosmic'
import { Product } from '@/types'
import { notFound } from 'next/navigation'
import ProductDetails from '@/components/ProductDetails'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <ProductDetails product={product as Product} />
    </div>
  )
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    return {
      title: 'Product Not Found'
    }
  }

  return {
    title: `${product.title} - Golden Hills Ranch`,
    description: product.metadata?.description?.replace(/<[^>]*>/g, '').substring(0, 160) || `Premium ${product.title} from Golden Hills Ranch.`
  }
}