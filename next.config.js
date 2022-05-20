const withPlugins = require('next-compose-plugins')
const svgr = require('next-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([[svgr, {dimensions: false}]], {
  experimental: {
    runtime: 'edge',
    serverComponents: true,
  },
  reactStrictMode: true,
})

module.exports = nextConfig
