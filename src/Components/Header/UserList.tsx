import React from "react";
import { BsBook } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import styles from "./style.module.css";

const UserList = () => {
  return (
    <ul className={styles.userList}>
      <li className={styles.headerListItem}>
        <a href="http://localhost:3000/">
          <BsBook className={styles.headerIcon} />
        </a>
        <div className={styles.headerIconDescription}>recipes</div>
      </li>
      <li className={styles.headerListItem}>
        <a href="http://localhost:3000/">
          <AiOutlineShop className={styles.headerIcon} />
        </a>
        <div className={styles.headerIconDescription}>shop</div>
      </li>
      <li className={styles.headerListItem}>
        <a href="http://localhost:3000/">
          <img src={process.env.PUBLIC_URL + "/User.png"} alt="user" />
        </a>
        <div className={styles.headerIconDescription}>profile</div>
      </li>
      <li className={styles.headerListItem}>
        <a href="http://localhost:3000/">
          <GoSettings className={styles.headerIcon} />
        </a>
        <div className={styles.headerIconDescription}>setting</div>
      </li>
    </ul>
  );
};
export default UserList;
