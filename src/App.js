import React, { useState } from "react";

import "./App.css";
import UserAdder from "./components/UserAdd/UserAdder";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ModalMessage/ErrorModal";

const App = () => {
  // const [users, setUsers] = useState([
  //   { id: "u1", name: "Mark", age: "31" },
  //   { id: "u2", name: "Marco", age: "30" },
  // ]);
  const [users, setUsers] = useState([]);
  const [inputErrors, setInputErrors] = useState({ username: true, age: true });

  const userHandler = (user) => {
    setUsers((prevUsers) => {
      const userList = [...prevUsers];
      userList.unshift(user);
      return userList;
    });
  };

  const inputErrorHandler = (inputError) => {
    setInputErrors(inputError);
  };

  const closeModalHandler = () => {
    setInputErrors({ username: true, age: true });
  };

  let errorModal;

  if (!inputErrors.username || !inputErrors.age) {
    errorModal = (
      <ErrorModal onCheckError={inputErrors} onCloseModal={closeModalHandler} />
    );
  }

  return (
    <div>
      {errorModal}
      <UserAdder
        onAddUser={userHandler}
        onError={inputErrorHandler}
        usersize={users.length}
      />
      <UserList items={users} />
    </div>
  );
};

export default App;
