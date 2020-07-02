'use strict'
const concat = require('concat')
const os = require('os')

const defaultOutFile = 'bundle.js'

module.exports = bundler => {
  const entryFiles = bundler.entryFiles
  const outFile = bundler.options.outFile ? bundler.options.outFile : defaultOutFile
  const outPath = os.tmpdir() + '/' + outFile

  console.log('\nentryFiles =', entryFiles)

  concat(entryFiles, outPath)
  bundler.entryFiles = [outPath]
}
