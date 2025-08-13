export default interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featuredImage: FeaturedImage;
  categories?: Category[];
}
export interface FeaturedImage {
  id: number;
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}
export interface Category {
  id: number;
  documentId?: string;
  Name: string;
  slug?: string;
}
