import { getFeaturedProducts, getCategories } from '@/lib/cosmic'
import { Product, Category } from '@/types'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryGrid from '@/components/CategoryGrid'

export default async function HomePage() {
  const [featuredProducts, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories()
  ])

  return (
    <div>
      <Hero />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of grass-fed beef cuts and dairy products.
          </p>
        </div>
        <FeaturedProducts products={featuredProducts as Product[]} />
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our carefully curated selection of premium beef and dairy products.
          </p>
        </div>
        <CategoryGrid categories={categories as Category[]} />
      </section>
    </div>
  )
}