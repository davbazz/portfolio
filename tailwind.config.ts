import type { Config } from 'tailwindcss'

export default {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: 'oklch(0.21 0.034 264.665)',
      },
    },
  },
  plugins: [],
} satisfies Config
