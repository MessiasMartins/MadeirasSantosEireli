import ProductSeoPage from '@/components/sections/products/ProductSeoPage'
import { getProductSeoPageBySlug } from '@/data/productSeoPages'

export default function CompensadoResinadoPage() {
  return <ProductSeoPage page={getProductSeoPageBySlug('compensado-resinado')} />
}
