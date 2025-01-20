import type { NextConfig } from "next";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "standalone",
  experimental: {
    authInterrupts: true,
  },
} satisfies NextConfig;

export default nextConfig;
