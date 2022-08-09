// import themeSettings from '../src/index.mjs'
import { writeFileSync, mkdir, existsSync } from 'fs'
import { resolve } from 'path'

const run = data => {
  const outDir = process.argv[3] || 'build'
  const outName = process.argv[4] || 'theme.json'
  const themeJson = JSON.stringify(data, null, 2)
  const write = () => {
    try {
      writeFileSync(resolve(outDir, outName), themeJson)
    } catch(error) {
      console.log('writeFileSync Error: ' + error.message)
    }
  }

  if (existsSync(outDir)) {
    write()
  } else {
    mkdir(outDir, error => {
      if (error) throw error
      write()
    })
  }
}

import(process.argv[2] || '../src/index.mjs')
.then(data => {
  run(data.default)
})
.catch(error => {
  console.log(error.message)
})
