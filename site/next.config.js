/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'The NOVA Corporation',
    description: 'The NOVA Corporation Kasm Images',
    icon: '/img/logo.svg',
    listUrl: 'https://officialnovagaming.github.io/kasm-registry',
    contactUrl: 'https://thenovacorporation.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
