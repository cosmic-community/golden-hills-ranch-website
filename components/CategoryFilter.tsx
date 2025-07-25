import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: string
  onCategoryChange: (categorySlug: string | undefined) => void
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange(undefined)}
          className={`block w-full text-left px-4 py-2 rounded-md transition duration-200 ${
            !selectedCategory
              ? 'bg-green-100 text-green-800 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`block w-full text-left px-4 py-2 rounded-md transition duration-200 ${
              selectedCategory === category.slug
                ? 'bg-green-100 text-green-800 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.metadata.name}
          </button>
        ))}
      </div>
    </div>
  )
}