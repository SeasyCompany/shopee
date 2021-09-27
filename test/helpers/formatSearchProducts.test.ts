import { ProductsSearchMock } from '../mocks/ProductsSearch'
import { formatSearchProducts } from '../../src/helpers/formatSearchProducts'

describe('formatSearchProducts', () => {
  it('should return formatted products', () => {
    const products = formatSearchProducts(ProductsSearchMock.items)
    expect(products[0].url.split('-').length).toEqual(16)

    const productKeys = Object.keys(products[0])
    expect(productKeys.length).toEqual(5)
    expect(productKeys.includes('url')).toEqual(true)
    expect(productKeys.includes('price')).toEqual(true)
    expect(productKeys.includes('location')).toEqual(true)
    expect(productKeys.includes('image')).toEqual(true)
    expect(productKeys.includes('marketplace')).toEqual(true)
  })
})
