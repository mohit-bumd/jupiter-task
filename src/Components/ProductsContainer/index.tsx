import { useContext } from "react";
import ProductCard from "../ProductCard";
import data from "../../Data/products.json";
import filterData from "../../Utils/filterData";
import { AppContext, ContextType } from "../../Context";
import styles from "./style.module.css";

const ProductsContainer = () => {
  const { selectedCategories } = useContext(AppContext) as ContextType;

  const productData =
    selectedCategories.length > 0 ? filterData(data, selectedCategories) : data;

  return (
    <section className={styles.productRow}>
      <div>
        <div className={styles.row}>
          {productData.map((item) => {
            return <ProductCard product={item} key={item.productId.value} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductsContainer;
