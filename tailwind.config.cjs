/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.6)',
        subtle: '#6b7280',
      },
      boxShadow: {
        glass: '0 10px 30px rgba(2,6,23,0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
