const Asset = require('./parcelRequires').Asset
const path = require('path')
const urlJoin = require('./urlJoin')
const sharp = require('sharp')

class ImageAsset extends Asset {
  constructor(...args) {
    super(...args)

    this.encoding = null
    this.images = []
  }

  async transform() {
    // Minify is off for dev servers, this plugin doesn't care
    // if (this.options.minify) {

    // Uncomment this if config is needed
    let config = await this.getConfig(['image-srcset.config.js'], {
      packageKey: 'image-srcset',
    })

    const location = path.resolve(this.name)

    this.thumbnail = await sharp(location)
      .resize(100, 100, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg(config.jpeg)
      .png(config.png)
      .blur()
      .toBuffer()
    this.original = await sharp(location)
      .resize(1600, 1600, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg(config.jpeg)
      .png(config.png)
      .toBuffer()
  }

  generate() {
    // Don't return a URL to the JS bundle if there is a bundle loader defined for this asset type.
    // This will cause the actual asset to be automatically preloaded prior to the JS bundle running.
    if (this.options.bundleLoaders[this.type]) {
      return {}
    }

    const pathToAsset = urlJoin(this.options.publicURL, this.generateBundleName())

    return [
      {
        type: 'js',
        value: `module.exports=${JSON.stringify(pathToAsset)};`,
        hasDependencies: false,
      },
      {
        type: this.type,
        value: this.original || null,
        hasDependencies: false,
      },
      {
        type: 'thumb.' + this.type,
        value: this.thumbnail || null,
        hasDependencies: false,
      },
    ]
  }
}

module.exports = ImageAsset
