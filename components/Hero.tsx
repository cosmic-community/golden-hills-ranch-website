import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-ranch-brown to-amber-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Premium Grass-Fed Beef
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          From our Montana ranch to your table. Experience the finest quality beef, 
          raised with care for over three generations.
        </p>
        <div className="space-x-4">
          <Link 
            href="/products" 
            className="inline-block bg-white text-ranch-brown px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
          <Link 
            href="/about-golden-hills-ranch" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ranch-brown transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}