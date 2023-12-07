/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack(config) {
    config.module.rules.push(
      // {
      //   test: /\.md$/,
      //   loader: 'frontmatter-markdown-loader',
      //   options: { mode: ['react-component'] },
      // },
      {
        test: /\.svg$/i,
        // options: { mode: ['react-component'] },
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    )
    return config
  },
}

module.exports = nextConfig
