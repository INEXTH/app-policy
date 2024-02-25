/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/inex-app-policy",
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  };

export default nextConfig;
