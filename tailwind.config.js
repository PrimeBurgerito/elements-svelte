const {tailwindExtractor} = require('tailwindcss/lib/lib/purgeUnusedStyles');

const config = {
  mode: 'jit',
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./src/**/*.{html,js,svelte,ts}'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*!/g) || []),
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

module.exports = config;
