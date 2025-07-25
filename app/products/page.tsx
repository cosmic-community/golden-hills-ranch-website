import { getProducts, getCategories } from '@/lib/cosmic'
import { Product, Category } from '@/types'
import ProductGrid from '@/components/ProductGrid'

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Premium grass-fed beef and cooking accessories from Golden Hills Ranch.
        </p>
      </div>

      <ProductGrid products={products as Product[]} />
    </div>
  )
}