/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //allowed domains to fetch images and generate pages
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
