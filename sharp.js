const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const directories = {
  heros: {
    target: path.resolve(__dirname, 'src/public/images/heros'),
    destination: path.resolve(__dirname, 'dist/images/heros')
  },
  menus: {
    target: path.resolve(__dirname, 'src/public/images/menus'),
    destination: path.resolve(__dirname, 'dist/images/menus')
  }
}

if (!fs.existsSync(path.resolve(__dirname, 'dist/images'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist/images'))
}

const changeImageSize = (target, destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination)
  }

  fs.readdirSync(target).forEach(image => {
    if (image.split('.').pop() === 'jpg') {
      sharp(`${target}/${image}`)
        .resize(1000)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.jpg`))

      sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.jpg`))
    } else if (image.split('.').pop() === 'webp') {
      sharp(`${target}/${image}`)
        .resize(1000)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.webp`))

      sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.webp`))
    }
  })
}

Object.keys(directories).forEach(key => {
  changeImageSize(directories[key].target, directories[key].destination)
})
