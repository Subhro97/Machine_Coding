import {
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_PRODUCT,
  REMOVE_ITEM,
} from "./actionTypes";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
}

export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
}

export function fetchProduct() {
  return async function (dispatch) {
    const response = await fetch("https://dummyjson.com/products/1");

    const product = await response.json();

    dispatch({
      type: FETCH_PRODUCT,
      payload: {
        title: product.title,
        price: product.price,
        totalQuant: 1,
      },
    });
  };
}
