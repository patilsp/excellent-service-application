/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
// }

// export default nextConfig

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'path/to/your/source/folder');
    return config;
  },
};
