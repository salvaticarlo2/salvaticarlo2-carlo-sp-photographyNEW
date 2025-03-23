import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate': '#2D3741',
        'off-white': '#F5F5F5',
        'earth-tone': '#A67C52',
        'sage-green': '#7D9D8C',
        'soft-blue': '#8CA3B7',
        'pure-white': '#FFFFFF',
        'light-gray': '#E0E0E0',
        'medium-gray': '#888888',
        'charcoal': '#222222',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

