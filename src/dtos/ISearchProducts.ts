interface ITierVariations {
  name: string;
  options: string[];
  images: string[];
}
export interface IItemBasic {
  name: string;
  itemid: number;
  shopid: number;
  price_max: number;
  shop_location: string;
  image: string;
  tier_variations: ITierVariations[]
}

export interface IItem {
  item_basic: IItemBasic;

}

export interface ISearchProducts {
  items: IItem[];
}
