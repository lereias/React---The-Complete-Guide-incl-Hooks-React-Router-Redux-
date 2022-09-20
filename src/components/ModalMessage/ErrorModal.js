import React from "react";

import Modal from "../UI/Modal";

const ErrorModal = (props) => {
  let modalTitle;
  let modalBody;

  console.log("props", props);

  if (!props.onCheckError.username || !props.onCheckError.age) {
    modalTitle = "Input Invalid";
  }

  if (!props.onCheckError.username && !props.onCheckError.age) {
    modalBody = "Please enter a valid username and age (non-blank input)";
  } else if (!props.onCheckError.username) {
    modalBody = "Please enter a valid username (non-blank username)";
  } else if (!props.onCheckError.age) {
    modalBody = "Please enter a valid age (>0)";
  }
  return (
    <Modal
      title={modalTitle}
      body={modalBody}
      onCloseModal={props.onCloseModal}
    />
  );
};

export default ErrorModal;
