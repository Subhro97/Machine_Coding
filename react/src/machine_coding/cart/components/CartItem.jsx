import { useDispatch } from "react-redux";
import { useCartCtx } from "../context/cart-context";
import {
  addItem,
  deleteItem,
  removeItem,
} from "../redux/actions/actionCreators";

const CartItem = ({ title, quantity, price }) => {
  // const { addMoreItem, removeItem, deleteItem } = useCartCtx();

  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="cart-info">
        <span>{title}</span>
        <span>x {quantity}</span>
      </div>
      <p className="cart-price">{price}</p>
      <div className="cart-btns">
        <button
          onClick={() =>
            // addMoreItem({ title: title, totalQuant: quantity, price: price })
            dispatch(
              addItem({ title: title, totalQuant: quantity, price: price })
            )
          }
        >
          +
        </button>
        <button
          onClick={() =>
            // removeItem({ title: title, totalQuant: quantity, price: price })
            dispatch(
              removeItem({ title: title, totalQuant: quantity, price: price })
            )
          }
        >
          -
        </button>
        <button
          onClick={() =>
            // deleteItem({ title: title, totalQuant: quantity, price: price })
            dispatch(
              deleteItem({ title: title, totalQuant: quantity, price: price })
            )
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
