import { useContext } from "react";
import Header from "../../Components/Header";
import Dashboard from "../../Containers/Dashboard";
import CartItems from "../../Components/CartItems";
import { AppContext, ContextType } from "../../Context";
import styles from "./style.module.css";

const Home = () => {
  const { cartActive } = useContext(AppContext) as ContextType;

  return (
    <main className={styles.mainSection}>
      <Header />
      <Dashboard />
      {cartActive && <CartItems />}
    </main>
  );
};

export default Home;
