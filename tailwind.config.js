/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'contactShadow':'0 0 0 1px #ffffff20',
        'navShadow':'0 -1px 2px #ffffff40',
      },
      backgroundImage: {
        'cardTransparent': `radial-gradient(157.14% 157.14% at 67.21% -25.11%, hsla(0, 0%, 100%, 0.06) 0%, transparent 100%)`,
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

