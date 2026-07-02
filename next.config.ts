import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "hearthnhome.getbynder.com" },
      { protocol: "https", hostname: "www.mendotahearth.com" },
    ],
  },
};

export default nextConfig;
