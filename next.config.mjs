/** @type {import('next').NextConfig} */
const nextConfig = {
  // ===== CONFIGURACIÓN BÁSICA =====
  compress: true,                    
  trailingSlash: false,             
  poweredByHeader: false,          
  
  // ===== CONFIGURACIÓN DE IMÁGENES =====
  images: {
    domains: [
      'nycseguridad.com.ar',           
    ],
    
    // Formatos optimizados (automático)
    formats: ['image/webp', 'image/avif'],
    
    // Tamaños comunes para tu sitio
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // ===== REWRITES =====
  async rewrites() {
    return [
      // Sitemap dinámico
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      
      // Robots.txt dinámico
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },

  // ===== HEADERS DE SEGURIDAD =====
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',  // Tu sitio solo puede ser embebido por el mismo dominio
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      
      // Headers específicos para imágenes
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

// ===== CONFIGURACIÓN SEGÚN AMBIENTE =====
if (process.env.NODE_ENV === 'production') {
  nextConfig.compiler = {
    removeConsole: {
      exclude: ['error', 'warn'],       
    },
  }
};

export default nextConfig;