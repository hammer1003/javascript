babel for server
npm i @babel/preset-env @babel/cli @babel/node @babel/core nodemon --save-dev

package.json
"dev":"nodemon --exec babel-node src/index.js"
"babel": {
"presets": ["@babel/preset-env"],
}

console.dir
