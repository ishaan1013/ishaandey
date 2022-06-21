/** @type {import('next-sitemap').IConfig} */

const config = {
    siteUrl: 'https://ishaandey.live/',
    changefreq: 'weekly',
    generateRobotsTxt: true,
    // Default transformation function
    transform: async (config, path) => {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    },
    additionalPaths: async (config) => [
      await config.transform(config, '/projects'),
      await config.transform(config, '/contact'),
    ],
  }
  
  export default config