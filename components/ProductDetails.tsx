import { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product || !product.metadata) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Product not found.</p>
      </div>
    )
  }

  const firstImage = product.metadata.images?.[0];
  const remainingImages = product.metadata.images?.slice(1) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {firstImage?.imgix_url && (
            <>
              <img
                src={`${firstImage.imgix_url}?w=600&h=500&fit=crop&auto=format,compress`}
                alt={product.metadata?.name || 'Product'}
                className="w-full h-96 object-cover rounded-lg"
              />
              {remainingImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {remainingImages.map((image, index) => (
                    image?.imgix_url && (
                      <img
                        key={index}
                        src={`${image.imgix_url}?w=200&h=150&fit=crop&auto=format,compress`}
                        alt={`${product.metadata?.name || 'Product'} ${index + 2}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                    )
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.metadata?.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold text-green-600">${product.metadata?.price}</span>
              {product.metadata?.weight && (
                <span className="text-lg text-gray-600">{product.metadata.weight}</span>
              )}
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${product.metadata?.in_stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.metadata?.in_stock ? 'In Stock' : 'Out of Stock'}
              </span>
              {product.metadata?.featured && (
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Featured Product
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: product.metadata?.description || '' }} />

          {product.metadata?.category && (
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
              <a
                href={`/categories/${product.metadata.category.slug}`}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {product.metadata.category.metadata?.name}
              </a>
            </div>
          )}

          <div className="border-t pt-6">
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ${
                product.metadata?.in_stock
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!product.metadata?.in_stock}
            >
              {product.metadata?.in_stock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}