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

module.exports = {
  mode: 'development',
  entry: './bot.js/boss.js', //указать наш файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boss.bundle.js' //указать итоговый файл
  },
  watch: true
};

module.exports = {
  mode: 'development',
  entry: './bot.js/tank.js', //указать наш файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tank.bundle.js' //указать итоговый файл
  },
  watch: true
};