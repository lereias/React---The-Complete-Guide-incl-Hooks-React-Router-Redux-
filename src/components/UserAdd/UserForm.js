import React, { useState } from "react";
import Button from "../UI/Button";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

    if (enteredUsername.trim().length !== 0) setIsValidUsername(true);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);

    if (enteredAge.trim().length === 0) setIsValidAge(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length !== 0 &&
      enteredAge.trim().length !== 0 &&
      Number(enteredAge) > 0
    ) {
      const user = {
        id: `u${String(props.usersize + 1)}`,
        name: enteredUsername,
        age: enteredAge,
      };

      props.onAddUser(user);
    } else {
      let username, age;

      if (enteredUsername.trim().length === 0) {
        setIsValidUsername(false);
        username = false;
      } else {
        setIsValidUsername(true);
        username = true;
      }

      if (enteredAge.trim().length === 0 || Number(enteredAge) <= 0) {
        setIsValidAge(false);
        age = false;
      } else {
        setIsValidAge(true);
        age = true;
      }

      const inputError = { username: username, age: age };

      props.onError(inputError);
    }

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={!isValidUsername ? styles.invalid : ""}>
          <label>Username</label>
          <input
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={!isValidAge ? styles.invalid : ""}>
          <label>Age (Years)</label>
          <input value={enteredAge} type="number" onChange={ageChangeHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserForm;
