import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 静的エクスポートを有効にする */
  output: 'export',
  
  /* 画像最適化を無効にする (Static Export時は必須) */
  images: {
    unoptimized: true,
  },

  /* 任意：URLの末尾にスラッシュを入れる設定 (Cloudflareと相性がいい) */
  trailingSlash: true,
};

export default nextConfig;