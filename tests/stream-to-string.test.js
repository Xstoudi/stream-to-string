const fs = require('fs')
const test = require('ava')

const streamToString = require('../src/index.js')

test('txt file stream', async t => {
  const result = await streamToString(fs.createReadStream('./tests/files/test.txt'))
  t.is(result, 'Hello, world!')
})

test('zip stream and read zip', async t => {
  const streamResult = await streamToString(fs.createReadStream('./tests/files/test.zip'), { encoding: 'binary' });
  t.is(streamResult, fs.readFileSync('./tests/files/test.zip').toString('binary'))
})