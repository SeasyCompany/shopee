import axios from 'axios'
import { errorHandler } from '@vmotta8/price-comparison'
import { ISearchProducts } from '../dtos'

export const ShopeeService = {
  async searchProducts (product: string): Promise<ISearchProducts> {
    const shopeeUrl = process.env.SHOPEE_URL || ''

    try {
      const response = await axios.get<ISearchProducts>(
        `${shopeeUrl}/search/search_items?by=relevancy&keyword=${product}&limit=15&locations=-1&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2`
      )

      return response.data
    } catch (error) {
      throw errorHandler.format(error)
    }
  }
}
