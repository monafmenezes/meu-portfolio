/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = {
  nextConfig,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    customKey: 'd816dbe9-e064-46c2-bfee-9ee17f16dbc0'
  }
}