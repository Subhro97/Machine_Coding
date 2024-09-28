import {
  ADD_TO_CART,
  INSCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./cartTypes";

export function addToCartAction(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function increaseItem(id) {
  return {
    type: INSCREASE_QUANTITY,
    payload: id,
  };
}

export function decreaseItem(id) {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
}
