import { createContext, useContext, useReducer } from "react";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartCtx = createContext({
  cart: [],
  totalPrice: 0,
  addMoreItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
});

const cartReducerHandler = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
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

    case "REMOVE_ITEM": {
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

    case "DELETE_ITEM": {
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

    default:
      return state;
  }
};

export const CartPovider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducerHandler, {
    ...initialState,
  });
  const store = {
    cart: cartState.cart,
    totalPrice: cartState.totalPrice,
    addMoreItem: (item) => {
      console.log("1");
      dispatch({ type: "ADD_ITEM", payload: item });
    },
    removeItem: (item) => {
      dispatch({ type: "REMOVE_ITEM", payload: item });
    },
    deleteItem: (item) => {
      dispatch({ type: "DELETE_ITEM", payload: item });
    },
  };
  return <cartCtx.Provider value={store}>{children}</cartCtx.Provider>;
};

export const useCartCtx = () => {
  return useContext(cartCtx);
};

/*
cart: [{
title:,
price:,
totalQuant:,
},{}],

total price:,
addMoreItem:,
removeItem:,
deleteItem,
 */
