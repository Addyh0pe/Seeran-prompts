/** @type {import('next').NextConfig} */
const nextConfig = {

  fetchCache: false,

  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
  
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "aws4": false
    };
    
    return config
  }
}

export default nextConfig;