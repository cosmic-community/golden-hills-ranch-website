import { Product } from '@/types'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featuredProducts = products.filter(product => product.metadata?.featured)

  if (!featuredProducts || featuredProducts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map((product) => {
        const firstImage = product.metadata?.images?.[0];
        
        return (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            {firstImage?.imgix_url && (
              <img
                src={`${firstImage.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                alt={product.metadata?.name || 'Product'}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{product.metadata?.name}</h3>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                  Featured
                </span>
              </div>
              <div className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: product.metadata?.description || '' }} />
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">${product.metadata?.price}</span>
                {product.metadata?.weight && (
                  <span className="text-sm text-gray-500">{product.metadata.weight}</span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${product.metadata?.in_stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.metadata?.in_stock ? 'In Stock' : 'Out of Stock'}
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
        );
      })}
    </div>
  )
}