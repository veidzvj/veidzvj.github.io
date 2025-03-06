/** @type {import('tailwindcss').Config} */
export default {
  content: [],
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
