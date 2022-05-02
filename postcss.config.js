const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      configPath: path.join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
