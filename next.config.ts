import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output: 'export' は消す！ */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;