let withBundleAnalyzer = (nextConfig) => nextConfig

try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
} catch (error) {
  // Fallback keeps builds working when bundle analyzer dependency is not installed
}

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],

  async redirects() {
    return [
      { source: '/products', destination: '/produtos', permanent: true },
      { source: '/produto', destination: '/produtos', permanent: true },
      { source: '/contact', destination: '/contato', permanent: true },
      { source: '/about', destination: '/contato', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/blog', destination: '/produtos', permanent: true },
      { source: '/blog/:path*', destination: '/produtos', permanent: true },
      { source: '/tags', destination: '/produtos', permanent: true },
      { source: '/tags/:path*', destination: '/produtos', permanent: true },
    ]
  },
})
