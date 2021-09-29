import { useContext } from "react";
import { RiFilterOffLine } from "react-icons/ri";
import { categories } from "../../Constants";
import { AppContext, ContextType } from "../../Context";
import styles from "./style.module.css";

const Category = () => {
  const { selectCategory, selectedCategories, removeFilter } = useContext(
    AppContext
  ) as ContextType;

  return (
    <section>
      <div className={styles.CategoryBox}>
        <div className={styles.CategoryHeadingBox}>
          <h4 className={styles.CategoryHeading}>shop by category</h4>
        </div>
        <ul className={styles.CategoryBoxList}>
          {categories.map((item) => {
            return (
              <li
                onClick={() => selectCategory(item.name)}
                className={
                  selectedCategories.includes(item.name)
                    ? styles.categoryBoxItemSelected
                    : styles.categoryBoxItem
                }
                key={item.id}
              >
                {item.name}
              </li>
            );
          })}
          {selectedCategories.length > 0 && (
            <li
              onClick={() => removeFilter()}
              className={styles.categoryBoxItem}
            >
              <RiFilterOffLine />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Category;
