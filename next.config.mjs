/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/listing-detail.html", destination: "/listing-detail" },
      { source: "/blog-detail.html", destination: "/blog-detail" },
      { source: "/event-detail.html", destination: "/event-detail" },
      { source: "/events-expo.html", destination: "/events-expo" },
    ];
  },
};

export default nextConfig;
