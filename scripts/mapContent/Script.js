import fs from 'fs'
const contentDir = process.argv[2]

console.log('Mapping content components in ->', contentDir)

fs.readdirSync(contentDir).forEach(dir => {
  const path = `${contentDir}/${dir}`

  // Ignore if not dir
  if (!fs.lstatSync(`${path}`).isDirectory()) return

  const isBlog = path.endsWith('blog')
  const isWork = path.endsWith('work')

  const rows = []
  rows.push('// Do not modify by hand')
  rows.push('// File generated with `mapContent` script')
  rows.push('')
  if (!isBlog) {
    rows.push("import importedComponent from 'react-imported-component'")
    rows.push('')
  }
  fs.readdirSync(path)
    .filter(Boolean)
    .filter(subDir => subDir !== 'index.js')
    .forEach(subDir => {
      if (!fs.lstatSync(`${path}/${subDir}`).isDirectory()) return
      if (subDir.includes(' ')) throw new Error(`Dir names cannot contain spaces => '${subDir}'`)
      if (isBlog || isWork) {
        const postName = subDir.toLowerCase()
        rows.push(`import ${postName} from './${subDir}'\nexport const ${subDir} = ${postName}`)
      } else {
        rows.push(`export const ${subDir} = importedComponent(() => import('./${subDir}'))`)
      }
    })
  rows.push('')
  fs.writeFileSync(`${path}/index.js`, rows.join('\n'), 'utf-8')
  console.log(`Updated -> '${dir}/index.js'`)
})
