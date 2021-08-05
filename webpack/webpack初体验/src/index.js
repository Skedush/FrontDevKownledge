/* index.js :webpack入口文件
 1.运行指令：
 开发环境：npx webpack --entry ./src/index.js --output-path ./build/built.js --mode=development
    webpack会以 ./src/index.js为入口文件开始打包，打包输出到 ./build/main.js
    整体打包环境，是开发环境
 生产环境：npx webpack --entry ./src/index.js --output-path ./build --mode=production --mode=production
    webpack会以 ./src/index.js为入口文件开始打包，打包输出到 ./build/main.js
    整体打包环境，是生产环境
*/

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
