/** @type {import('next').NextConfig} */

  const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [ "api.spoonacular.com", ]
    },
}
  
  module.exports = nextConfig;