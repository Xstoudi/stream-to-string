function streamToString(stream, options = {}){
  return new Promise(resolve => {
    let chunks = []

    stream.on('data', chunk => {
      chunks.push(chunk)
    })
    stream.on('end', () => {
      const vString = Buffer.concat(chunks).toString(options.encoding || 'utf8')
      resolve(vString)
    })
    stream.on('error', err => {
      throw err
    })
  })
}

module.exports = streamToString