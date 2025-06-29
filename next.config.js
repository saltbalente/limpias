/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is enabled by default in Next.js 14
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Para que funcione offline, necesitamos configurar las rutas correctamente
  distDir: 'out'
}

module.exports = nextConfig