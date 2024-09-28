import {
  ADD_ITEM,
  REMOVE_ITEM,
  DELETE_ITEM,
  FETCH_PRODUCT,
} from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newCart = [...state.cart];

      const item = action.payload;
      console.log("2");

      const productIdx = newCart.findIndex(
        (product, idx) => product.title === item.title
      );

      if (productIdx === -1) {
        newCart.push(item);
      } else {
        newCart[productIdx].totalQuant += 1;
      }

      const totalPrice = state.totalPrice + item.price;
      console.log(totalPrice);

      return {
        ...state,
        cart: newCart,
        totalPrice: Number(Number.parseFloat(totalPrice).toFixed(2)),
      };
    }

    case REMOVE_ITEM: {
      let newCart = [...state.cart];

      const item = action.payload;
      console.log("2");

      const productIdx = newCart.findIndex(
        (product, idx) => product.title === item.title
      );

      newCart[productIdx].totalQuant -= 1;

      if (newCart[productIdx].totalQuant === 0) {
        newCart = [
          ...newCart.slice(0, productIdx),
          ...newCart.slice(productIdx + 1),
        ];
      }

      const totalPrice = state.totalPrice - item.price;
      console.log(totalPrice);

      return {
        ...state,
        cart: newCart,
        totalPrice: Number(Number.parseFloat(totalPrice).toFixed(2)),
      };
    }

    case DELETE_ITEM: {
      let newCart = [...state.cart];

      const item = action.payload;
      console.log("2");

      const productIdx = newCart.findIndex(
        (product, idx) => product.title === item.title
      );

      newCart = [
        ...newCart.slice(0, productIdx),
        ...newCart.slice(productIdx + 1),
      ];

      const totalPrice = state.totalPrice - item.price * item.totalQuant;

      return {
        ...state,
        cart: newCart,
        totalPrice: Number(Number.parseFloat(totalPrice).toFixed(2)),
      };
    }

    case FETCH_PRODUCT: {
      let newCart = [...state.cart];

      const item = action.payload;

      newCart.push(item);

      const totalPrice = state.totalPrice + item.price;

      return {
        ...state,
        cart: newCart,
        totalPrice: Number(Number.parseFloat(totalPrice).toFixed(2)),
      };
    }

    default:
      return state;
  }
};
