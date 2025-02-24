/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        maskImage: {
          'mask-pattern': "url('/medias/mask.svg')",
        },
        maskSize: {
          '80': '80%',
        },
        maskPosition: {
          'center': 'center',
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite', // 10 saniyede tam tur
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
