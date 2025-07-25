import { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products available.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {product.metadata?.images && product.metadata.images.length > 0 && (
            <img
              src={`${product.metadata.images[0].imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
              alt={product.metadata?.name || 'Product'}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.metadata?.name}</h3>
            <div className="text-sm text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: product.metadata?.description || '' }} />
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-green-600">${product.metadata?.price}</span>
              {product.metadata?.weight && (
                <span className="text-sm text-gray-500">{product.metadata.weight}</span>
              )}
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className={`px-2 py-1 rounded text-xs ${product.metadata?.in_stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.metadata?.in_stock ? 'In Stock' : 'Out of Stock'}
              </span>
              {product.metadata?.featured && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Featured</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}