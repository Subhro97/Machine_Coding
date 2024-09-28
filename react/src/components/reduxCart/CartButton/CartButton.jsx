import { useSelector } from "react-redux";
import styles from "./CartButton.module.css";

const CartButton = ({ modal: showModal }) => {
  const quantity = useSelector((state) => state.cart.cartQuantity);
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
        <span>{quantity}</span>
      </div>
    </section>
  );
};

export default CartButton;
