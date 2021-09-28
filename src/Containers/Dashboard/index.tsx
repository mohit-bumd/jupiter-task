import React from "react";
import Category from "../../Components/Category";
import ProductsContainer from "../../Components/ProductsContainer";
import styles from "./style.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <Category />
        <ProductsContainer />
      </div>
    </>
  );
};
export default Dashboard;
