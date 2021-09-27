import { IProduct } from '../dtos'

export const filterProductsByPrice = (products: IProduct[]): IProduct[] => {
  let sum = 0
  products.forEach((product): void => { sum += product.price })
  const average = (sum / products.length)

  const lowerPrice = average / 1.5
  const higherPrice = average * 3

  const filteredProducts = products.filter(({ price }) => {
    return (price > lowerPrice && price < higherPrice)
  })
  return filteredProducts
}
