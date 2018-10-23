// 如果项目比较简单，就是直接用这个文件吧，干掉 src
console.log('Simple repo!');

// 否则的话
module.exports = require('./src/index');
