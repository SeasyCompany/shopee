import { HelloUsecase } from '../../src/usecases'

describe('hello usecase', () => {
  it('should return hello string', () => {
    const usecase = new HelloUsecase()
    const response = usecase.execute()
    expect(response).toBe('Hello Shopee Typescript!!')
  })
})
