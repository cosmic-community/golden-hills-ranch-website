export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=2000&auto=format,compress"
          alt="Golden Hills Ranch cattle grazing"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Grass-Fed Beef
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From our family ranch in Montana to your table. 
            Three generations of quality, sustainability, and exceptional taste.
          </p>
          <div className="space-x-4">
            <a
              href="/products"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Shop Now
            </a>
            <a
              href="/about-golden-hills-ranch"
              className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}