/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    appDir: true,
  },
  // Configure images if needed
  images: {
    domains: [],
  },
  // Environment variables that should be available in the browser
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  },
};

module.exports = nextConfig;
