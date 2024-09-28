import "./Modal.css";

import CartItem from "./CartItem";

import { useCartConsumer } from "@/context/cart-context";

const Modal = ({ modal: hideModal, isModalActive }) => {
  const { cartItems, totalAmt } = useCartConsumer();

  return (
    <section className={`modalCont ${isModalActive ? "active" : ""}`}>
      <div className="modalWrap">
        <div className="modalContent">
          {cartItems.map((item, idx) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="modalDetails">
          <div className="cartAmt">
            <p>Total Amount</p>
            <p>{`Rs.${totalAmt}`}</p>
          </div>
          <div className="modalBtns">
            <button onClick={hideModal}>Cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
