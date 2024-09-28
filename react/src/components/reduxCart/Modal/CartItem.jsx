import { decreaseItem, increaseItem } from "@/redux/cart/cartAction";
import { useDispatch } from "react-redux";

const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="itemWrap">
      <div className="itemCont">
        <p className="itemName">{name}</p>
        <div className="itemDetails">
          <span className="itemPrice">Rs {price}</span>
          <span className="itemQuant">x{quantity}</span>
        </div>
      </div>
      <div className="itemBtns">
        <button onClick={() => dispatch(increaseItem(id))}>+</button>
        <button onClick={() => dispatch(decreaseItem(id))}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
