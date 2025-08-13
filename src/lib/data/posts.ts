import type Post from '../../interfaces/post';
import type { FeaturedImage, Category } from '../../interfaces/post';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Primer post de ejemplo',
    description: 'Un post de ejemplo para la clase.',
    slug: 'primer-post',
    content: 'Este es el contenido del primer post.',
    createdAt: '2025-08-01',
    updatedAt: '2025-08-01',
    publishedAt: '2025-08-01',
    featuredImage: {
      id: 1,
      url: '../../assets/astro.svg',
      alternativeText: 'Astro logo',
    },
    categories: [
      { id: 1, Name: 'Tutoriales', slug: 'tutoriales' },
    ],
  },
  {
    id: 2,
    title: 'Segundo post',
    description: 'Otro post de ejemplo.',
    slug: 'segundo-post',
    content: 'Contenido del segundo post.',
    createdAt: '2025-08-10',
    updatedAt: '2025-08-10',
    publishedAt: '2025-08-10',
    featuredImage: {
      id: 2,
      url: '../../assets/astro.svg',
      alternativeText: 'Background',
    },
    categories: [
      { id: 2, Name: 'Noticias', slug: 'noticias' },
    ],
  },
];
