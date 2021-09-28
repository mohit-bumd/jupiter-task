import React from "react";
import styles from "./style.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import data from "../../Data/products.json";
import ProductCard from "../ProductCard";

const ProductsContainer = () => {
  return (
    <section className={styles.productRow}>
      <div>
        <div className={styles.row}>
          {data.map((item) => {
            return <ProductCard product={item} key={item.productId.value} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductsContainer;
