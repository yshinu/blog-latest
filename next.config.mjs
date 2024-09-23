/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'file.933331.xyz',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            }
        ],
    }
};

export default nextConfig;
