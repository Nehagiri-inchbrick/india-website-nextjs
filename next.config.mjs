/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/terms-conditions", destination: "/terms", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/listing-detail.html", destination: "/listing-detail" },
      { source: "/blog-detail.html", destination: "/blog-detail" },
      { source: "/event-detail.html", destination: "/event-detail" },
      { source: "/events-expo.html", destination: "/events-expo" },
      { source: "/terms.html", destination: "/terms" },
      { source: "/privacy-policy.html", destination: "/privacy-policy" },
    ];
  },
};

export default nextConfig;
