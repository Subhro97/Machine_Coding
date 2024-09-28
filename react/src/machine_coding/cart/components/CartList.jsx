import { useDispatch, useSelector } from "react-redux";
import { useCartCtx } from "../context/cart-context";
import CartItem from "./CartItem";
import { fetchProduct } from "../redux/actions/actionCreators";

const CartList = () => {
  // const { cart, totalPrice } = useCartCtx();
  const { cart, totalPrice } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <div className="cart-items-cont">
      <h2>Cart Items</h2>
      <p>Total Price: {`\$ ${totalPrice}`}</p>
      {cart.length > 0 ? (
        cart.map((product, idx) => (
          <CartItem
            key={crypto.randomUUID()}
            title={product.title}
            quantity={product.totalQuant}
            price={product.price}
          />
        ))
      ) : (
        <p>Cart is Empty!</p>
      )}
      <button onClick={() => dispatch(fetchProduct())}>Fetch Product</button>
    </div>
  );
};

export default CartList;
