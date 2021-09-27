import { IProduct, IItem } from '../dtos'

export const formatSearchProducts = (items: IItem[]): IProduct[] => {
  const products = items.map(item => {
    const { itemid, shopid, shop_location, image, price, name } = item.item_basic

    return {
      marketplace: 'shopee',
      url: `https://shopee.com.br/${name.replace(/ /g, '-').replace(/%/g, '')}-i.${shopid}.${itemid}`,
      image: `https://cf.shopee.com.br/file/${image}`,
      price: (price / 100000),
      location: shop_location
    }
  })
  return products
}
