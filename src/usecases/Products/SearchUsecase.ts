import { IProduct } from '../../dtos'
import { ShopeeService } from '../../services'
import { filterProductsByPrice, formatSearchProducts } from '../../helpers'
import { sortProductsByPrice, filterProductsByDetails } from '@seasy/package'

interface Payload {
  product: string;
}
export class SearchUsecase {
  async execute (queryStringParameters: Payload): Promise<IProduct[]> {
    const { product } = queryStringParameters

    const response = await ShopeeService.searchProducts(product)
    const formattedProducts = formatSearchProducts(response.items)
    const filteredProductsByDetails = filterProductsByDetails(formattedProducts, product)
    const filteredProductsByPrice = filterProductsByPrice(filteredProductsByDetails)
    const sortedProducts = sortProductsByPrice(filteredProductsByPrice)
    return sortedProducts
  }
}
