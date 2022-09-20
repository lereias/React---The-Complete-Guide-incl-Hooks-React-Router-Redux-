import React from "react";
import Users from "../Users/Users";

const UserList = (props) => {
  return <Users items={props.items} />;
};

export default UserList;
