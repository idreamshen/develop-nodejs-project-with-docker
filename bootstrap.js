require('babel-register')({
  plugins: ['transform-async-to-generator']
});

require('./index.js');
