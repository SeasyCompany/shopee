export interface IItemBasic {
  name: string;
  itemid: number;
  shopid: number;
  price: number;
  shop_location: string;
  image: string;
}

export interface IItem {
  item_basic: IItemBasic;

}

export interface ISearchProducts {
  items: IItem[];
}
