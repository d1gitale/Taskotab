import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'build',
  assetPrefix: './',
  basePath: '',
  reactStrictMode: true,
};

export default nextConfig;
