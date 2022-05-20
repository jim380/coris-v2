/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

  }
  
  module.exports = nextConfig
  
  module.exports = {
    // This will build the project as a standalone app inside the Docker image.
    experimental: {
      outputStandalone: true,
    },
  }