/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'media.graphcms.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/:path((?!ie_warning$).*)',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '(.*Trident.*)',
          },
        ],
        permanent: false,
        destination: '/ie_warning',
      },
    ]
  },
}

module.exports = nextConfig
