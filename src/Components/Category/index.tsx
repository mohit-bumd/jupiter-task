import React from "react";
import { categories } from "../../Constants";
import styles from "./style.module.css";
const Category = () => {
  return (
    <section>
      <div className={styles.CategoryBox}>
        <div className={styles.CategoryHeadingBox}>
          <h4 className={styles.CategoryHeading}>shop by category</h4>
        </div>
        <ul className={styles.CategoryBoxList}>
          {categories.map((item) => {
            return (
              <li className={styles.categoryBoxItem} key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Category;
