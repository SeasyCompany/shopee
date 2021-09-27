import { IProduct, IItem, IVariations } from '../dtos'

export const formatSearchProducts = (items: IItem[]): IProduct[] => {
  const products = items.map(item => {
    const { itemid, shopid, shop_location, image, price_max, name, tier_variations } = item.item_basic

    const variations = tier_variations.map((item): IVariations => {
      const { name, options } = item
      return { name, options }
    })

    return {
      marketplace: 'shopee',
      url: `https://shopee.com.br/${name.replace(/ /g, '-').replace(/%/g, '')}-i.${shopid}.${itemid}`,
      image: `https://cf.shopee.com.br/file/${image}`,
      price: (price_max / 100000),
      location: shop_location,
      title: name,
      variations
    }
  })
  return products
}
