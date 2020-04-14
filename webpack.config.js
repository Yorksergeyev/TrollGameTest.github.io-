const path = require('path');


module.exports = {
  mode: 'development',
  entry: './bot.js/troll.js', //указать наш файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js' //указать итоговый файл
  },
  watch: true
};

