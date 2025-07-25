'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-ranch-brown"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-ranch-brown transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="block px-3 py-2 text-gray-700 hover:text-ranch-brown transition-colors"
                onClick={closeMenu}
              >
                Products
              </Link>
              <Link 
                href="/about-golden-hills-ranch" 
                className="block px-3 py-2 text-gray-700 hover:text-ranch-brown transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/beef-cooking-guide" 
                className="block px-3 py-2 text-gray-700 hover:text-ranch-brown transition-colors"
                onClick={closeMenu}
              >
                Cooking Guide
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}