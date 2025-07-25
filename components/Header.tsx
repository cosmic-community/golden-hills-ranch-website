import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-ranch-brown">
              Golden Hills Ranch
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-ranch-brown transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-ranch-brown transition-colors">
              Products
            </Link>
            <Link href="/about-golden-hills-ranch" className="text-gray-700 hover:text-ranch-brown transition-colors">
              About
            </Link>
            <Link href="/beef-cooking-guide" className="text-gray-700 hover:text-ranch-brown transition-colors">
              Cooking Guide
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-ranch-brown">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}