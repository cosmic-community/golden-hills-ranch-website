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
  )
}