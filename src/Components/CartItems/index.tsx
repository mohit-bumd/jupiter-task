import { useContext } from "react";
import { AiFillCaretRight, AiFillDelete } from "react-icons/ai";
import CartItemCard from "../CartItemCard";
import { AppContext, ContextType } from "../../Context";
import styles from "./style.module.css";

const CartItems = () => {
  const { addedToCartProducts, clearCart } = useContext(
    AppContext
  ) as ContextType;

  return (
    addedToCartProducts && (
      <div className={styles.cartItemsContainer}>
        <div className={styles.cartItemInfo}>
          <div>Total Items: {addedToCartProducts.length}</div>
          <button
            className={styles.clearCartButton}
            onClick={() => clearCart()}
          >
            Clear Cart
            <AiFillDelete />
          </button>
        </div>
        <ul className={styles.cartItemsList}>
          {addedToCartProducts.map((item) => {
            return (
              item && <CartItemCard cartItem={item || null} key={item?.id} />
            );
          })}
        </ul>
        <div className={styles.checkoutButtonContainer}>
          <button className={styles.checkoutButton}>
            Checkout and Pay
            <AiFillCaretRight />
          </button>
        </div>
      </div>
    )
  );
};

export default CartItems;
