export enum ActionTypes {
  addProductToCartResquest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSucces = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICardItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICardItem[];
  failedStateCheck: number[];
}
