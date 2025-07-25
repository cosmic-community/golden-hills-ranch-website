export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface HomepageContentMetadata {
  hero_title: string;
  hero_subtitle: string;
  hero_background_image: CosmicFile;
  featured_products_title: string;
  featured_products_description: string;
  categories_title: string;
  categories_description: string;
}

export interface HomepageContent {
  id: string;
  title: string;
  slug: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: HomepageContentMetadata;
}

export interface CategoryMetadata {
  name: string;
  description?: string;
  image?: CosmicFile;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: CategoryMetadata;
}

export interface ProductMetadata {
  name: string;
  description: string;
  price: number;
  weight?: string;
  images: CosmicFile[];
  category: Category;
  in_stock: boolean;
  featured: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: ProductMetadata;
}

export interface PageMetadata {
  title: string;
  content: string;
  meta_description?: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: PageMetadata;
}