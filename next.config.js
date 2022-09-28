/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "mir-s3-cdn-cf.behance.net"],
  },
};

module.exports = nextConfig;
