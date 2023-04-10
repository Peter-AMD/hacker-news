/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.wired.com",
      "cdn.sanity.io",
      "t3.ftcdn.net",
      "leaguefeed.net",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig
