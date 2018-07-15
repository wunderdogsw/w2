import fs from 'fs'
const contentDir = process.argv[2]

console.log('Mapping content components in -> ', contentDir)

fs.readdirSync(contentDir).forEach(dir => {
  const path = `${contentDir}/${dir}`

  // Ignore if not dir
  if (!fs.lstatSync(`${path}`).isDirectory()) return

  const rows = []
  rows.push('// File generated with `mapContent` Script')
  rows.push(`// ${new Date()}`)
  rows.push('')
  rows.push('import importedComponent from \'react-imported-component\'')
  rows.push('')
  rows.push('export default {')
  fs.readdirSync(path)
    .filter( Boolean )
    .filter( subDir => subDir !== 'index.js')
    .forEach( subDir => {
      if (!fs.lstatSync(`${path}/${subDir}`).isDirectory()) return
      if (subDir.includes(' ')) throw new Error(`Dir names cannot contain spaces => '${subDir}'`)
      rows.push(`  ${subDir.toLowerCase()}: importedComponent(() => import('./${subDir}')),`)
    })
  rows.push('}')
  fs.writeFileSync(`${path}/index.js`, rows.join('\n'), 'utf-8')
  console.log(`Updated -> '${dir}/index.js'`)
})
