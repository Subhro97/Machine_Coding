import { useState } from "react";

import CartButton from "./CartButton/CartButton";
import Modal from "./Modal/Modal";
import Products from "./Products/Products";
import styles from "./index.module.css";

const Cart = () => {
  const [showModal, showModalHandler] = useState(false);

  const handleModal = (type) => {
    if (type === "show") showModalHandler(true);
    else showModalHandler(false);
  };
  return (
    <div className={styles.cartWrapper}>
      <CartButton modal={handleModal} />
      <Products />
      <Modal modal={handleModal} isModalActive={showModal} />
    </div>
  );
};

export default Cart;
