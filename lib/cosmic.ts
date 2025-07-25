import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  apiEnvironment: "staging"
})

export async function getProducts() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return objects || []
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProduct(slug: string) {
  try {
    const object = await cosmic.objects
      .findOne({ type: 'products', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return object
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getFeaturedProducts() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'products', 'metadata.featured': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return objects || []
  } catch (error) {
    console.error('Error fetching featured products:', error)
    // Return first 3 products as fallback
    try {
      const { objects } = await cosmic.objects
        .find({ type: 'products' })
        .props(['id', 'title', 'slug', 'metadata'])
        .depth(1)
        .limit(3)
      return objects || []
    } catch (fallbackError) {
      console.error('Error fetching fallback products:', fallbackError)
      return []
    }
  }
}

export async function getCategories() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return objects || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getCategory(slug: string) {
  try {
    const object = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return object
  } catch (error) {
    console.error('Error fetching category:', error)
    return null
  }
}

export async function getProductsByCategory(categorySlug: string) {
  try {
    // First get the category to find its ID
    const category = await getCategory(categorySlug)
    if (!category) {
      return []
    }

    // Then find products that reference this category by ID
    const { objects } = await cosmic.objects
      .find({ type: 'products', 'metadata.category': category.id })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return objects || []
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
}

export async function getPages() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return objects || []
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

export async function getPage(slug: string) {
  try {
    const object = await cosmic.objects
      .findOne({ type: 'pages', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return object
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getHomepageContent() {
  try {
    const object = await cosmic.objects
      .findOne({ type: 'homepage-content' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return object
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return null
  }
}