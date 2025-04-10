import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Ensures images work properly in static export
  },
  trailingSlash: true,
};

export default nextConfig;
