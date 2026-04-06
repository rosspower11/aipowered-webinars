import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-557b5f7935344f8e91f1d0f115f8ec73.r2.dev',
      },
    ],
  },
}

export default nextConfig
