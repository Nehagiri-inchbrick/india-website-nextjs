/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/listing-detail.html", destination: "/listing-detail" },
      { source: "/blog-detail.html", destination: "/blog-detail" },
    ];
  },
};

export default nextConfig;
