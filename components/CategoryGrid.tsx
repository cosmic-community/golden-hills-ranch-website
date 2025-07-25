import { Category } from '@/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No categories available.</p>
      </div>
    )
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our carefully curated selection of premium beef cuts and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              {category.metadata.image && (
                <img
                  src={`${category.metadata.image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                  alt={category.metadata.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition duration-300">
                  {category.metadata.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.metadata.description}</p>
                <span className="text-green-600 font-medium group-hover:text-green-700 transition duration-300">
                  Shop {category.metadata.name} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}