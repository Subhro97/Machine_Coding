import React from "react";
import { useCartCtx } from "../context/cart-context";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions/actionCreators";

const Product = ({ image, title, price }) => {
  // const { addMoreItem } = useCartCtx();

  const dispatch = useDispatch();

  return (
    <div className="product">
      <picture>
        <img src={image} />
      </picture>
      <p>{title}</p>
      <p>{`\$ ${price}`}</p>
      <button
        onClick={() =>
          // addMoreItem({ title: title, totalQuant: 1, price: price })
          dispatch(addItem({ title: title, totalQuant: 1, price: price }))
        }
        className="add"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
