const IMAGE_PACKAGER = './ImagePackager'
const IMAGE_ASSET = './ImageAsset'

module.exports = function(bundler) {
  // Assets
  bundler.addAssetType('jpg', require.resolve(IMAGE_ASSET))
  bundler.addAssetType('jpeg', require.resolve(IMAGE_ASSET))
  bundler.addAssetType('png', require.resolve(IMAGE_ASSET))
  bundler.addAssetType('gif', require.resolve(IMAGE_ASSET))
  bundler.addAssetType('webp', require.resolve(IMAGE_ASSET))

  // Packagers
  bundler.addPackager('jpg', require.resolve(IMAGE_PACKAGER))
  bundler.addPackager('jpeg', require.resolve(IMAGE_PACKAGER))
  bundler.addPackager('png', require.resolve(IMAGE_PACKAGER))
  bundler.addPackager('gif', require.resolve(IMAGE_PACKAGER))
  bundler.addPackager('webp', require.resolve(IMAGE_PACKAGER))
}
