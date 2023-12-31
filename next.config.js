/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['images.igdb.com', 'youtu.be', 'i.ytimg.com'],
    },
    
}

module.exports = nextConfig