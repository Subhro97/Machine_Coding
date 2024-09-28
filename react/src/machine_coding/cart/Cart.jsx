import React, { useEffect, useState } from "react";
import { fetchCartItems } from "./api/cart-api";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { CartPovider } from "./context/cart-context.jsx";

import "./Cart.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCartItems()
      .then((products) => {
        if (products.length > 0) {
          setProducts(products);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    // <CartPovider>
    //   {products.length > 0 ? (
    //     <section className="cart-cont">
    //       <ProductList products={products} />
    //       <CartList />
    //     </section>
    //   ) : (
    //     <p className="loading-txt">Loading...</p>
    //   )}
    // </CartPovider>
    <Provider store={store}>
      {products.length > 0 ? (
        <section className="cart-cont">
          <ProductList products={products} />
          <CartList />
        </section>
      ) : (
        <p className="loading-txt">Loading...</p>
      )}
    </Provider>
  );
};

export default Cart;
