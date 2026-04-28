let withBundleAnalyzer = (nextConfig) => nextConfig
const crypto = require('crypto')

const originalCreateHash = crypto.createHash
crypto.createHash = (algorithm, options) => {
  const normalizedAlgorithm =
    typeof algorithm === 'string' && ['md4', 'native-md4', 'xxhash64'].includes(algorithm)
      ? 'sha256'
      : algorithm

  return originalCreateHash(normalizedAlgorithm, options)
}

try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
} catch (error) {
  // Fallback keeps builds working when bundle analyzer dependency is not installed
}

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },

  async redirects() {
    return [
      { source: '/products', destination: '/produtos', permanent: true },
      { source: '/produto', destination: '/produtos', permanent: true },
      { source: '/contact', destination: '/contato', permanent: true },
      { source: '/about', destination: '/contato', permanent: true },
      { source: '/home', destination: '/', permanent: true },
    ]
  },

  webpack: (config, { dev, isServer }) => {
    config.output.hashFunction = 'sha256'

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer && process.env.NEXT_USE_PREACT === 'true') {
      // Replace React with Preact only when explicitly enabled
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
