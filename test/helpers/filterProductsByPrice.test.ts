import { ProductsSearchMock } from '../mocks/ProductsSearch'
import { formatSearchProducts } from '../../src/helpers/formatSearchProducts'
import { filterProductsByPrice } from '../../src/helpers/filterProductsByPrice'

describe('filterProductsByPrice', () => {
  it('should return filtered products', () => {
    const formattedProducts = formatSearchProducts(ProductsSearchMock.items)
    const filteredProducts = filterProductsByPrice(formattedProducts)
    expect(filteredProducts.length).toEqual(7)
  })
})
