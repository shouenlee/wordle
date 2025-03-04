/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/wordle', // Replace with your repository name
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 