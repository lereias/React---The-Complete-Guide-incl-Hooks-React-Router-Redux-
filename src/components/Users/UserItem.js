import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div
      className={styles["user-item"]}
    >{`${props.name} (${props.age} years old)`}</div>
  );
};

export default UserItem;
