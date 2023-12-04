/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'rotate': 'spin 80s linear infinite',
        'rotate-reverse': 'spin 80s linear infinite reverse',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      colors: {
        'saffron': '#fa4103',
        'grny': '#8cff00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      footerHide: "560px",
      navHide: "640px",
      laptop: "1024px",
    },
    fontFamily: {
      heading: ['Monaco', 'Bitstream Vera Sans Mono', 'Lucida Console'],
      content_font: ['Roboto Condensed', 'sans-serif'],
      sub_title: ['Roboto Mono', 'monospace'],
    },
  },
  variants: {
    extend: {
      transform: ['active'],
    },
  },
  plugins: [],
};
