import { Product } from '@/types'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featuredProducts = products.filter(product => product.metadata.featured)

  if (!featuredProducts || featuredProducts.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of grass-fed beef and cooking accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              {product.metadata.images && product.metadata.images.length > 0 && (
                <img
                  src={`${product.metadata.images[0].imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                  alt={product.metadata.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{product.metadata.name}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </span>
                </div>
                <div className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: product.metadata.description }} />
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">${product.metadata.price}</span>
                  {product.metadata.weight && (
                    <span className="text-sm text-gray-500">{product.metadata.weight}</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${product.metadata.in_stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.metadata.in_stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <a
                    href={`/products/${product.slug}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}