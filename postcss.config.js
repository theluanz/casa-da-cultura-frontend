module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    [
      'tailwindcss',
      {
        // specify your TailwindCSS configuration here
      },
    ],
  ],
};
