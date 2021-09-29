import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartItem } from "../../Types/cartItem.interface";
import { AppContext, ContextType } from "../../Context";
import styles from "./style.module.css";

interface Props {
  cartItem: CartItem | null;
}

const CartItemCard: React.FC<Props> = ({ cartItem }) => {
  const { updateQuantity, removeFromCart } = useContext(
    AppContext
  ) as ContextType;

  return (
    cartItem && (
      <li className={styles.cartItemCard}>
        <div className={styles.cartItemImageContainer}>
          <img src={cartItem.imageUrl} className={styles.cartItemImage} />
        </div>
        <div className={styles.cartItemInfo}>
          <div className={styles.cartItemTitle}>{cartItem.name}</div>
          <div className={styles.cartItemPrice}>
            ${(cartItem.price * cartItem.quantity) / 100}
          </div>
          <div className={styles.cartItemSubContainer}>
            <div className={styles.cartItemQuantityControls}>
              <button
                className={
                  cartItem.quantity > 1
                    ? styles.quantityControl
                    : styles.quantityControlDisabled
                }
                disabled={!(cartItem.quantity > 1)}
                onClick={() => updateQuantity(cartItem.id, "subtract")}
              >
                -
              </button>
              <input
                disabled
                type="numeric"
                className={styles.quantityControlDisabled}
                value={cartItem.quantity}
              />
              <button
                className={styles.quantityControl}
                onClick={() => updateQuantity(cartItem.id, "add")}
              >
                +
              </button>
            </div>
            <button
              className={styles.clearItemButton}
              onClick={() => removeFromCart(cartItem.id)}
            >
              <AiFillDelete className={styles.clearItemIcon} />
            </button>
          </div>
        </div>
      </li>
    )
  );
};

export default CartItemCard;
