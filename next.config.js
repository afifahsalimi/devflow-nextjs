/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      aws4: false,
    });
    return config;
  },
};

module.exports = nextConfig;
