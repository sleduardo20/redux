import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStateCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartSucces: {
        const { product } = action.payload;

        const productInCarIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCarIndex >= 0) {
          draft.items[productInCarIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStateCheck.push(action.payload.productId);
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
