/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/erase-una-vez': { page: '/erase-una-vez' },
      '/politica-de-cookies': { page: '/politica-de-cookies'},
    }
  }
}

module.exports = nextConfig
