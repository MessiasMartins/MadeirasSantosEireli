import ProductSeoPage from '@/components/sections/products/ProductSeoPage'
import { getProductSeoPageBySlug } from '@/data/productSeoPages'

export default function CaibrosPinusEucaliptoPage() {
  return <ProductSeoPage page={getProductSeoPageBySlug('caibros-pinus-eucalipto')} />
}
