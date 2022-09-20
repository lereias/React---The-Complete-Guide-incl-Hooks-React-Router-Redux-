import React from "react";

import Button from "./Button";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.modal}>
        <div>
          <div className={styles["modal-title"]}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles["modal-body"]}>
            <p>{props.body}</p>
            <Button type="button" onClick={props.onCloseModal}>
              Okay
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.modalfilter}></div>
    </div>
  );
};

export default Modal;
