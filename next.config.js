/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }),
      config.externals = [...config.externals, { canvas: 'canvas' }];
      return config
    },
  }