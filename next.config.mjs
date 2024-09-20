/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'file.933331.xyz',
            },
        ],
    }
};

export default nextConfig;
