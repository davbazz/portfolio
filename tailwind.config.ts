import type { Config } from 'tailwindcss'

export default {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config
