const {
  rejects
} = require('assert');
const fs = require('fs');

function readFile(url) {
  return fs.readFileSync(url, 'utf8');
}

function writeFile(url, text) {
  fs.writeFileSync(url, text)
}

module.exports = {
  readFile,
  writeFile
}
