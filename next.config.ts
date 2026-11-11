import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  // Static export for GitHub Pages (owner-approved 2026-11-11).
  // next/image consequences: GitHub Pages has no image-optimization server,
  // so image optimization must be disabled — <Image> resolves to plain files.
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
