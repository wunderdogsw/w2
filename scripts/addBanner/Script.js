import fs from 'fs'
const targetFile = process.argv[2]

console.log(`Adding banner to '${targetFile}'`)

const content = fs.readFileSync(targetFile, 'utf-8')
const banner = `


     __     __        __  __        __   __
    /\\ \\  _ \\ \\      /\\ \\/\\ \\      /\\ "-.\\ \\
    \\ \\ \\/ ".\\ \\     \\ \\ \\_\\ \\     \\ \\ \\-.  \\
     \\ \\__/".~\\_\\     \\ \\_____\\     \\ \\_\\\\"\\_\\
      \\/_/   \\/_/      \\/_____/      \\/_/ \\/_/

           _____          ______         ______
          /\\  __-.       /\\  ___\\       /\\  == \\
          \\ \\ \\/\\ \\      \\ \\  __\\       \\ \\  __<
           \\ \\____-       \\ \\_____\\      \\ \\_\\ \\_\\
            \\/____/        \\/_____/       \\/_/ /_/

               _____          ______         ______
              /\\  __-.       /\\  __ \\       /\\  ___\\
              \\ \\ \\/\\ \\      \\ \\ \\/\\ \\      \\ \\ \\__ \\
               \\ \\____-       \\ \\_____\\      \\ \\_____\\
                \\/____/        \\/_____/       \\/_____/




                    Hi! See the full source in our github
                    https://github.com/wunderdogsw/w2


`
console.log(banner)

const contentWithBanner =
`<!--
${ banner }
-->
${ content }
`
fs.writeFileSync(targetFile, contentWithBanner, 'utf-8')
console.log('Adding banner -> done')
