// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        // Solo incluye los iconos MDI que realmente usas
        mdi: [
          'message',
          'account',
          'chevron-down',
          'check-decagram',
          'arrow-right',
          'arrow-left',
          'draw',
          'file-document-edit',
          'lightning-bolt',
          'email',
          'calendar-check',
          'send',
          'check-circle-outline',
          'instagram',
          'palette',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: ['200 800'],
      subsets: ['latin'],
    },
  ],
  css: {
    postcss: {
      plugins: {
        '@tailwindcss/postcss': {},
      },
    },
  },
})
