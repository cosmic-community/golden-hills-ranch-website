import Link from 'next/link'
import { HomepageContent } from '@/types'

interface HeroProps {
  content: HomepageContent | {
    metadata: {
      hero_title: string;
      hero_subtitle: string;
      hero_background_image: {
        url: string;
        imgix_url: string;
      };
      featured_products_title: string;
      featured_products_description: string;
      categories_title: string;
      categories_description: string;
    }
  };
}

export default function Hero({ content }: HeroProps) {
  const backgroundImage = content.metadata.hero_background_image?.imgix_url
    ? `${content.metadata.hero_background_image.imgix_url}?w=1920&h=800&fit=crop&auto=format,compress`
    : '';

  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section 
      className={`relative text-white py-20 ${!backgroundImage ? 'bg-gradient-to-r from-ranch-brown to-amber-800' : ''}`}
      style={heroStyle}
    >
      {!backgroundImage && <div className="absolute inset-0 bg-black opacity-20"></div>}
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {content.metadata.hero_title}
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {content.metadata.hero_subtitle}
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