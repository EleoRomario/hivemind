import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1c76fe',
        bunker: {
          50: '#d2d6da',
          100: '#c7ccd6',
          200: '#b1b8c4',
          300: '#8f99a8',
          400: '#697686',
          500: '#4f5863',
          600: '#3a414b',
          700: '#2a3037',
          800: '#202428',
          900: '#171c22',
          950: '#0e1118',
        },
      },
    },
  },
  plugins: [],
};
export default config;
