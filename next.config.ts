import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bodas",
  assetPrefix: "/bodas/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
