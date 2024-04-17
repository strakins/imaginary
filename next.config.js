/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.clerk.com"],
  },
};

module.exports = {
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  }
};
