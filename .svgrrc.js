const path = require('path')

const FILE_PREFIX = 'Svg'
const OUTPUT_PATH = 'src/ui/icons'

const indexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename)
      ? `${basename}`
      : `${FILE_PREFIX}${basename}`

    return `export { default as ${exportName} } from './${basename}'`
  })

  return exportEntries.join('\n')
}

module.exports = {
  expandProps: 'end',
  ignoreExisting: true,
  memo: true,
  outDir: OUTPUT_PATH,
  prettier: true,
  svgoConfig: {
    plugins: [{ name: 'removeViewBox', active: false }],
  },
  typescript: true,
  indexTemplate,
}
