import React from "react";
import styles from "./style.module.css";
import UserList from "./UserList";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src={process.env.PUBLIC_URL + "/Vector.png"} alt="logo" />
        </div>
        <div className={styles.headerInput}>
          <input
            type="text"
            placeholder="Search Jupiter"
            className={styles.headerInputField}
          />
          <span className={styles.searchIcon}>
            <AiOutlineSearch />
          </span>
        </div>
        <div className={styles.headerOption}>
          <div className={styles.headerButtonBox}>
            <button className={styles.headerButton}>get $20 off</button>
          </div>
          <UserList />
        </div>
      </div>
    </header>
  );
};
export default Header;
