/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
