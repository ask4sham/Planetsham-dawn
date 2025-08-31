import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ ensures Vercel serves built pages correctly
  reactStrictMode: true,
};

export default nextConfig;
