# Golden Hills Ranch E-commerce Website

![Golden Hills Ranch](https://imgix.cosmicjs.com/db3936f0-6977-11f0-a051-23c10f41277a-photo-1546833999-b9f581a1996d-1753462394656.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium e-commerce website for Golden Hills Ranch, showcasing their grass-fed beef products and cooking accessories. Built with Next.js 15 and [Cosmic](https://www.cosmicjs.com) headless CMS for content management.

## Features

- 🥩 **Product Catalog** - Browse premium beef cuts and cooking accessories
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🔍 **Category Filtering** - Filter products by Premium Cuts, Ground Beef, and Cooking Accessories
- ⭐ **Featured Products** - Highlight special and premium items
- 📄 **Content Pages** - About page and beef cooking guide
- 🖼️ **Image Optimization** - Fast-loading, optimized product images
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6883b5d745a59f0b52cf8873&clone_repository=6883ba4045a59f0b52cf88a0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a meat ecommerce website. Golden Hills Ranch sells beef and cooking accessories."

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Content Management:** [Cosmic](https://www.cosmicjs.com) headless CMS
- **Language:** TypeScript
- **Package Manager:** Bun
- **Image Optimization:** Imgix (via Cosmic)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Golden Hills Ranch bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products with Categories
```typescript
import { cosmic } from '@/lib/cosmic'

const products = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include connected category data
```

### Getting Featured Products
```typescript
const featuredProducts = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.featured': true 
  })
  .depth(1)
```

### Fetching Single Product
```typescript
const product = await cosmic.objects.findOne({
  type: 'products',
  slug: productSlug
}).depth(1)
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket using the following object types:

- **Products** - Beef cuts and cooking accessories with pricing, images, and categories
- **Categories** - Product categorization (Premium Cuts, Ground Beef, Cooking Accessories)
- **Pages** - Static content pages (About, Cooking Guide)

The app uses Cosmic's depth parameter to automatically fetch connected objects like product categories, eliminating the need for multiple API calls.

For more information about Cosmic's API, visit the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

Remember to set your environment variables in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->