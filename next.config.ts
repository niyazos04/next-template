/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure you're using the app router if applicable
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
