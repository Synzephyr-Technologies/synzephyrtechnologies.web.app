import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true, // Requires 'critters' library
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
