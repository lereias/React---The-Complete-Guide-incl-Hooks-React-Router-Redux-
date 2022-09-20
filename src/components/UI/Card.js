import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${styles.card} ${
        props.className === "user-add" ? styles["user-add"] : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
