import { useCartConsumer } from "@/context/cart-context";

import styles from "./CartButton.module.css";

const CartButton = ({ modal: showModal }) => {
  const { cartQuantity } = useCartConsumer();

  return (
    <section
      className="flex justify-end max-w-96 select-none"
      onClick={() => showModal("show")}
    >
      <div className={styles.cartCont}>
        <div className={styles.cartIcon}>
          <img src="/cart.svg" />
        </div>
        <span>Cart</span>
        <span>{cartQuantity}</span>
      </div>
    </section>
  );
};

export default CartButton;
