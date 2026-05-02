export function getOptimizedProductImage(product) {
  if (!product?.image?.startsWith('/assets/products/') || !product.image.endsWith('.png')) {
    return product?.image
  }

  const fileName = product.image
    .split('/')
    .pop()
    .replace(/\.png$/, '.webp')
  return `/assets/products/optimized/${fileName}`
}

export default getOptimizedProductImage
