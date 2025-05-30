/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict TypeScript checking for production build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static optimization for dynamic routes with authentication
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Server-side functionality enabled for Clerk authentication
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  // Enable external packages for Clerk
  serverExternalPackages: ["@clerk/nextjs"],
};

module.exports = nextConfig;
