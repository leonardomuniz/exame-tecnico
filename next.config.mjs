/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Link',
                        value: '</_next/static/media/f4371935bdf675c40a327b63465e998b.ca7ad989.jpeg>; rel=preload; as=image',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
