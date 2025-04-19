import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'iba-sts-projects.s3.us-east-2.amazonaws.com',
            },
        ],
    },
  /* config options here */
};

export default nextConfig;
