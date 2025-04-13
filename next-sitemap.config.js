/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://augustaluxury.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin9876/*', '/api/*']
      }
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://augustaluxury.in'}/sitemap.xml`
    ]
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin9876/*', '/api/*'],
  generateIndexSitemap: true,
  outDir: 'public',
  sourceDir: '.next',
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  }
} 