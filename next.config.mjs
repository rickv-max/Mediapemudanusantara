/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "localhost"], // backend host
  },
};

export default nextConfig; // ✅ pakai export default, bukan module.exports
