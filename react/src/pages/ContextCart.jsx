import Cart from "@/components/cart/index.jsx";
import { CartProvider } from "@/context/cart-context.jsx";

const ContextCart = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default ContextCart;
