/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/om-os",
        destination: "/om-mig",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;