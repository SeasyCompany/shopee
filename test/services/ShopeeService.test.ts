import axios from 'axios'
import { ProductsSearchMock } from '../mocks/ProductsSearch'
import { ShopeeService } from '../../src/services'

axios.get = jest.fn((): any => { return { data: ProductsSearchMock } })

describe('shopee service', () => {
  describe('search products', () => {
    it('should return shopee products', async () => {
      const data = await ShopeeService.searchProducts('product name')
      expect(data).toBe(ProductsSearchMock)
    })
  })
})
