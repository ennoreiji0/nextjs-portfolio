import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // これ
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
};

export default nextConfig;