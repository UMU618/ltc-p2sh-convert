/**
 * @author UMU618 <umu618@hotmail.com>
 * @copyright MEET.ONE 2019
 * @description Use block-always-using-brace npm-coding-style.
 * @install yarn add bs58check
 */

'use strict'

const bsc = require('bs58check')

for (let i = 2; i < process.argv.length; ++i) {
  convert(process.argv[i])
}

function convert(str) {
  try {
    const buffer = bsc.decode(str)
    if (buffer.length == 21) {
      if (buffer[0] == 5) {
        buffer[0] = 50
        const m = bsc.encode(buffer)
        console.log(str, '->', m)
      } else if (buffer[0] == 50) {
        buffer[0] = 5
        const three = bsc.encode(buffer)
        console.log(three, '<-', str)
      } else {
        console.error(`convert('${str}') error: invalid version byte`)
      }
    } else {
      console.error(`convert('${str}') error: invalid length`)
    }
  } catch(err) {
    console.error(`convert('${str}') error:`, err.message)
  }
}
