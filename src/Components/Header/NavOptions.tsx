import { useContext } from "react";
import { BsBook } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext, ContextType } from "../../Context";
import styles from "./style.module.css";

const NavOptions = () => {
  const { handleCartClick, addedToCartProducts } = useContext(
    AppContext
  ) as ContextType;

  return (
    <ul className={styles.navOption}>
      <li className={styles.headerListItem}>
        <BsBook className={styles.headerIcon} />
        <div className={styles.headerIconDescription}>Recipes</div>
      </li>
      <li className={styles.headerListItem}>
        <AiOutlineShop className={styles.headerIcon} />
        <div className={styles.headerIconDescription}>Shop</div>
      </li>
      <li className={styles.headerListItem}>
        <img src={process.env.PUBLIC_URL + "/User.png"} alt="user" />
        <div className={styles.headerIconDescription}>Profile</div>
      </li>
      <li className={styles.headerListItem}>
        <GoSettings className={styles.headerIcon} />
        <div className={styles.headerIconDescription}>Setting</div>
      </li>
      <li className={styles.headerListItem}>
        <button className={styles.cartButton} onClick={handleCartClick}>
          <FiShoppingCart className={styles.headerIcon} />
          <div className={styles.headerIconDescription}>Cart</div>
          {addedToCartProducts.length > 0 && (
            <div className={styles.notification}>
              {addedToCartProducts.length}
            </div>
          )}
        </button>
      </li>
    </ul>
  );
};

export default NavOptions;
