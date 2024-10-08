import React, { useState } from "react";
import styles from "./card.module.css";

export default function Card({
  headColor,
  mainColor,
  headerText,
  price,
  speed,
}) {
  const [clicked, setClicked] = useState(false);

  const handleClickedState = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={styles.card}
      onClick={handleClickedState}
      style={
        clicked
          ? {
              transform: "scale(1.1)",
              boxShadow: "5px 5px 15px 25px grey",
            }
          : { transform: "none" }
      }
    >
      <p className={`${styles.card__header} ${headColor}`}>{headerText}</p>
      <div className={`${styles.card__price} ${mainColor}`}>
        <p>руб</p>
        <p>{price}</p>
        <p>/мес</p>
      </div>
      <p className={styles.card__speed}>до {speed} Мбит/сек</p>
      <p className={styles.card__footer}>
        Объем включенного трафика не ограничен
      </p>
    </div>
  );
}
