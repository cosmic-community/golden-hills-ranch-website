import { getFeaturedProducts, getCategories, getHomepageContent } from '@/lib/cosmic'
import { Product, Category, HomepageContent } from '@/types'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryGrid from '@/components/CategoryGrid'

export default async function HomePage() {
  const [featuredProducts, categories, homepageContent] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
    getHomepageContent()
  ])

  // Fallback content if CMS content is not available
  const defaultContent: HomepageContent = {
    id: 'default',
    title: 'Homepage Content',
    slug: 'homepage-content',
    type: 'homepage-content',
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
    metadata: {
      hero_title: "Premium Grass-Fed Beef",
      hero_subtitle: "From our Montana ranch to your table. Experience the finest quality beef, raised with care for over three generations.",
      hero_background_image: {
        url: "https://images.unsplash.com/photo-1588347818133-6b2e6b5e3b72?w=2000&auto=format,compress",
        imgix_url: "https://images.unsplash.com/photo-1588347818133-6b2e6b5e3b72?w=2000&auto=format,compress"
      },
      featured_products_title: "Featured Products",
      featured_products_description: "Discover our premium selection of grass-fed beef cuts and dairy products.",
      categories_title: "Shop by Category",
      categories_description: "Browse our carefully curated selection of premium beef and dairy products."
    }
  }

  const content: HomepageContent = homepageContent || defaultContent

  return (
    <div>
      <Hero content={content} />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {content.metadata?.featured_products_title || "Featured Products"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.metadata?.featured_products_description || "Discover our premium selection of grass-fed beef cuts and dairy products."}
          </p>
        </div>
        <FeaturedProducts products={featuredProducts as Product[]} />
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {content.metadata?.categories_title || "Shop by Category"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.metadata?.categories_description || "Browse our carefully curated selection of premium beef and dairy products."}
          </p>
        </div>
        <CategoryGrid categories={categories as Category[]} />
      </section>
    </div>
  )
}