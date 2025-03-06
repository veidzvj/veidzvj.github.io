/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './index.vue',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-color)',
        secundary: 'var(--bg-color-secundary)',
        gray: 'var(--gray-color)',
      },
      textColor: {
        primary: 'var(--white-color)',
        secondary: 'var(--primary-color)',
        gray: 'var(--gray-color)',
      },
      borderColor: {
        primary: 'var(--primary-color)',
      },
      fontFamily: {
        logo: ['Playwrite IT Moderna', 'serif'],
      },
    },
  },
  plugins: [],
}
