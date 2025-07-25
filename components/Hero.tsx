import Link from 'next/link'
import { HomepageContent } from '@/types'

interface HeroProps {
  content: HomepageContent;
}

export default function Hero({ content }: HeroProps) {
  const backgroundImage = content.metadata?.hero_background_image?.imgix_url
    ? `${content.metadata.hero_background_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`
    : '';

  return (
    <section 
      className="relative text-white min-h-[70vh] flex items-center justify-center bg-ranch-brown"
      style={{
        backgroundImage: backgroundImage 
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          {content.metadata?.hero_title || "Premium Grass-Fed Beef"}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md opacity-95">
          {content.metadata?.hero_subtitle || "From our Montana ranch to your table. Experience the finest quality beef, raised with care for over three generations."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link 
            href="/products" 
            className="inline-block bg-white text-ranch-brown px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[160px]"
          >
            Shop Now
          </Link>
          <Link 
            href="/about-golden-hills-ranch" 
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ranch-brown transition-all duration-300 hover:shadow-lg transform hover:scale-105 min-w-[160px]"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}