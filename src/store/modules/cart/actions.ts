import { ActionTypes, IProduct } from './types';

export function addProductToCardRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartResquest,
    payload: {
      product,
    },
  };
}
export function addProductToCardSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSucces,
    payload: {
      product,
    },
  };
}
export function addProductToCardFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
