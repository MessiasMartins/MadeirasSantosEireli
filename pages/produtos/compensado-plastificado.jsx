import ProductSeoPage from '@/components/sections/products/ProductSeoPage'
import { getProductSeoPageBySlug } from '@/data/productSeoPages'

export default function CompensadoPlastificadoPage() {
  return <ProductSeoPage page={getProductSeoPageBySlug('compensado-plastificado')} />
}
