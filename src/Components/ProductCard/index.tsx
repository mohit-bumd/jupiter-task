import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Product } from "../../Types/product.interface";
import { AppContext, ContextType } from "../../Context";

interface Props {
  product: Product;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, addedToCartProducts } = useContext(
    AppContext
  ) as ContextType;

  const disabled = (item: Product) => {
    const index = addedToCartProducts.findIndex(
      (item) => item?.id === product.productId.value
    );
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  };

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
        <h2>${product.price / 100}</h2>
      </div>
      <div className={styles.productBoxButton}>
        <button
          onClick={() => addToCart(product)}
          className={
            disabled(product)
              ? styles.productButtonDisabled
              : styles.productButton
          }
          disabled={disabled(product)}
        >
          {!disabled(product) && <IoIosAddCircleOutline />}
          {disabled(product) ? "added to cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
