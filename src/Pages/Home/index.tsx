import React from "react";
import Header from "../../Components/Header";
import Category from "../../Components/Category";
// import ProductRow from "./components/ProductRow/ProductRow";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./style.module.css";
import ProductsContainer from "../../Components/ProductsContainer";
import Dashboard from "../../Containers/Dashboard";

const Home = () => {
  return (
    <>
      <main className={styles.mainSection}>
        <Header />
        <Dashboard />
        {/* <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarItem}>
              <BsArrowRight className={styles.sidebarIcon} />
            </div>
            <div className={styles.sidebarItem}>
              <h2 className={styles.sidebarText}>your cart</h2>
            </div>
            <div className={styles.sidebarItem}>
              <AiOutlineShoppingCart />
              <span>cart</span>
            </div>
          </div>
        </aside> */}
      </main>
    </>
  );
};
export default Home;
