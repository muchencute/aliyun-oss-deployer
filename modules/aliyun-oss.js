const http = require('http')
const fs = require('fs')

class AliyunOSS {

  constructor (accessKeyID, accessKeySecret) {
    this.accessKeyID = accessKeyID
    this.accessKeySecret = accessKeySecret
  }

  /**
   * PutObject
   * @param {string} bucket 
   * @param {string} key 
   * @param {string} fullPath 
   */
  put (bucket, key, fullPath) {
    let chunks = []
    let size = 0

    fs.createReadStream(fullPath)
      .on('data', (chunk) => {
        chunks.push(chunk)
        size += chunks.length
      }).on('end', () => {
      let data = null
      switch (chunks.length) {
        case 0:
          data = new Buffer(0)
          break
        case 1:
          data = chunk[0]
          break
        default:
          data = new Buffer(size)
          let i = 0, pos = 0, len = chunks.length
          for (; i < len; i++) {
            chunk.copy(data, pos)
            pos += chunk.length
          }
          break
      }
    })

    let filename = path.normalize('/', key).replace(/\\/g, '/')
  }

}
