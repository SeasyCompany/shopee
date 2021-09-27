import axios from 'axios'
import { SearchUsecase } from '../../../src/usecases'
import { ProductsSearchMock } from '../../mocks/ProductsSearch'

axios.get = jest.fn((): any => { return { data: ProductsSearchMock } })

describe('products search usecase', () => {
  it('should return hello string', async () => {
    const usecase = new SearchUsecase()
    const response = await usecase.execute({ product: 'product name' })
    expect(response.length).toBe(7)
  })
})
