const fs = require('fs')

const readStream = fs.ReadStream('./docs/Streams.txt')
const writeStream = fs.WriteStream('./docs/blog4.txt')

readStream.pipe(writeStream)