import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/private/',
    },
    sitemap: 'https://fastprintdelhi.com/sitemap.xml',
  }
}