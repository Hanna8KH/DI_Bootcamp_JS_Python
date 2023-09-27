const { readFile, writeFile } = require('./fileManager.js')

const helloFile = 'HelloWorld.txt';
const byeFile = 'ByeWorld.txt';
const content = 'Writing to the file'

readFile(helloFile)

writeFile(byeFile, content)