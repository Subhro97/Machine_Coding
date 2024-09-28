import { useCartConsumer } from "@/context/cart-context";

const CartItem = ({ id, name, price, quantity }) => {
  const { incrementItem, decrementItem } = useCartConsumer();

  const addMoreToCartHandler = (id) => {
    incrementItem(id);
  };

  const deleteFromCartHandler = (id) => {
    decrementItem(id);
  };

  
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
        <button onClick={() => addMoreToCartHandler(id)}>+</button>
        <button onClick={() => deleteFromCartHandler(id)}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
