import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";

import styles from "./Users.module.css";

const Users = (props) => {
  let showContent = (
    <p className={styles["no-users"]}>There are no users. Please add one!</p>
  );
  if (props.items.length > 0) {
    showContent = props.items.map((item) => (
      <UserItem key={item.id} name={item.name} age={item.age} />
    ));
  }

  return <Card>{showContent}</Card>;
};

export default Users;
