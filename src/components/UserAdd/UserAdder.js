import React from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";

const UserAdder = (props) => {
  return (
    <Card className="user-add">
      <UserForm
        onAddUser={props.onAddUser}
        onError={props.onError}
        usersize={props.usersize}
      />
    </Card>
  );
};

export default UserAdder;
