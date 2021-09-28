import React from "react";
import styles from "./style.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Product } from "../../Types/product.interface";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.productBox}>
      <div className={styles.productBoxImage}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImageClass}
        />
      </div>
      <div className={styles.productBoxContent}>
        <small className={styles.productSmallInfo}>{product.brand}</small>
        <h3 className={styles.productName}>{product.name}</h3>
        <h2>
          {product.price}/{product.unitType}
        </h2>
      </div>
      <div className={styles.productBoxButton}>
        <button className={styles.productButton}>
          <IoIosAddCircleOutline />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
