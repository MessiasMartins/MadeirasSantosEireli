import ProductSeoPage from '@/components/sections/products/ProductSeoPage'
import { getProductSeoPageBySlug } from '@/data/productSeoPages'

export default function TabuasDePinusPage() {
  return <ProductSeoPage page={getProductSeoPageBySlug('tabuas-de-pinus')} />
}
