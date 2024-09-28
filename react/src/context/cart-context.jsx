import { createContext, useContext, useReducer } from "react";

const cartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
});

const initialCartState = {
  cartItems: [],
  totalAmt: 0,
  cartQuantity: 0,
};

const cartActionHandler = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const cart = [...state.cartItems];

      const productIndex = cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex === -1) {
        product.quantity = 1;

        const newCart = [...state.cartItems, product];

        const newTotalAmt = state.totalAmt + product.price;

        return {
          cartItems: newCart,
          totalAmt: newTotalAmt,
          cartQuantity: state.cartQuantity + 1,
        };
      } else {
        cart[productIndex].quantity += 1;

        const newTotalAmt = state.totalAmt + cart[productIndex].price;

        return {
          cartItems: [
            ...state.cartItems.slice(0, productIndex),
            cart[productIndex],
            ...state.cartItems.slice(productIndex + 1),
          ],
          totalAmt: newTotalAmt,
          cartQuantity: state.cartQuantity + 1,
        };
      }
    }

    case "INSCREASE_QUANTITY": {
      const cart = [...state.cartItems];

      const productIndex = cart.findIndex((item) => item.id === action.payload);

      cart[productIndex].quantity += 1;

      const newTotalAmt = state.totalAmt + cart[productIndex].price;

      return {
        cartItems: [
          ...state.cartItems.slice(0, productIndex),
          cart[productIndex],
          ...state.cartItems.slice(productIndex + 1),
        ],
        totalAmt: newTotalAmt,
        cartQuantity: state.cartQuantity + 1,
      };
    }

    case "DECREASE_QUANTITY": {
      const cart = [...state.cartItems];

      const productIndex = cart.findIndex((item) => item.id === action.payload);

      cart[productIndex].quantity -= 1;

      const newTotalAmt = state.totalAmt - cart[productIndex].price;

      if (cart[productIndex].quantity === 0) {
        return {
          cartItems: [
            ...state.cartItems.slice(0, productIndex),
            ...state.cartItems.slice(productIndex + 1),
          ],
          totalAmt: newTotalAmt,
          cartQuantity: state.cartQuantity - 1,
        };
      }

      return {
        cartItems: [
          ...state.cartItems.slice(0, productIndex),
          cart[productIndex],
          ...state.cartItems.slice(productIndex + 1),
        ],
        totalAmt: newTotalAmt,
        cartQuantity: state.cartQuantity - 1,
      };
    }
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchAction] = useReducer(
    cartActionHandler,
    initialCartState
  );

  const addToCartHandler = (product) => {
    dispatchAction({ type: "ADD_TO_CART", payload: product });
  };

  const incrementItemHandler = (id) => {
    dispatchAction({ type: "INSCREASE_QUANTITY", payload: id });
  };

  const decrementItemHandler = (id) => {
    dispatchAction({ type: "DECREASE_QUANTITY", payload: id });
  };

  const cartObj = {
    cartItems: cartState.cartItems,
    totalAmt: cartState.totalAmt,
    cartQuantity: cartState.cartQuantity,
    addToCart: addToCartHandler,
    incrementItem: incrementItemHandler,
    decrementItem: decrementItemHandler,
  };

  return (
    <cartContext.Provider value={cartObj}>{children}</cartContext.Provider>
  );
};

export const useCartConsumer = () => {
  return useContext(cartContext);
};
