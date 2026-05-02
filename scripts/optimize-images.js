const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = process.cwd()
const productsDir = path.join(root, 'public/assets/products')
const optimizedProductsDir = path.join(productsDir, 'optimized')

const imageTasks = [
  {
    src: 'public/assets/images/hero-forest-generic.jpg',
    dest: 'public/assets/images/hero-forest-generic.webp',
    width: 1600,
    quality: 78,
  },
  {
    src: 'public/assets/images/empilhadeira.jpg',
    dest: 'public/assets/images/empilhadeira.webp',
    width: 1000,
    quality: 78,
  },
  {
    src: 'public/assets/images/empilhadeira-wide.jpg',
    dest: 'public/assets/images/empilhadeira-wide.webp',
    width: 1600,
    quality: 78,
  },
  {
    src: 'public/assets/images/madeiras-santos-fachada.jpg',
    dest: 'public/assets/images/madeiras-santos-fachada.webp',
    width: 1280,
    quality: 78,
  },
  {
    src: 'public/assets/images/madeiras-santos-loja.jpg',
    dest: 'public/assets/images/madeiras-santos-loja.webp',
    width: 1280,
    quality: 78,
  },
]

function sizeInKiB(bytes) {
  return `${Math.round(bytes / 1024)} KiB`
}

function getSize(file) {
  return fs.statSync(path.join(root, file)).size
}

async function optimizeImage({ src, dest, width, quality }) {
  const sourcePath = path.join(root, src)
  const destPath = path.join(root, dest)
  fs.mkdirSync(path.dirname(destPath), { recursive: true })

  await sharp(sourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(destPath)

  return {
    src,
    dest,
    before: getSize(src),
    after: getSize(dest),
  }
}

async function optimizeProducts() {
  fs.mkdirSync(optimizedProductsDir, { recursive: true })

  const productFiles = fs
    .readdirSync(productsDir)
    .filter((file) => file.endsWith('.png'))
    .sort()

  return Promise.all(
    productFiles.map(async (file) => {
      const src = `public/assets/products/${file}`
      const dest = `public/assets/products/optimized/${file.replace(/\.png$/, '.webp')}`
      const destPath = path.join(root, dest)

      await sharp(path.join(root, src))
        .rotate()
        .resize({ width: 900, height: 900, fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 76, effort: 4 })
        .toFile(destPath)

      return {
        src,
        dest,
        before: getSize(src),
        after: getSize(dest),
      }
    })
  )
}

async function run() {
  const results = [
    ...(await Promise.all(imageTasks.map(optimizeImage))),
    ...(await optimizeProducts()),
  ]
  const before = results.reduce((total, result) => total + result.before, 0)
  const after = results.reduce((total, result) => total + result.after, 0)

  results.forEach((result) => {
    console.log(
      `${result.dest}: ${sizeInKiB(result.before)} -> ${sizeInKiB(result.after)} (${sizeInKiB(
        result.before - result.after
      )} saved)`
    )
  })

  console.log(
    `Total image source reduction: ${sizeInKiB(before)} -> ${sizeInKiB(after)} (${sizeInKiB(
      before - after
    )} saved)`
  )
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
