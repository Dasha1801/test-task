import React from "react";
import styles from "./userCard.module.scss";

function UserCard(): JSX.Element {
  return (
    <div className={styles.card}>
      <ul>
        <li className={styles.item}>
          <span className={styles.field}>ФИО:</span>Иван Иванов
        </li>
        <li className={styles.item}>
          <span className={styles.field}>город:</span>Москва
        </li>
        <li className={styles.item}>
          <span className={styles.field}>компания:</span>ООО “Пример”
        </li>
      </ul>
      <input type="button" value="Подробнее" className={styles.btn}/>
    </div>
  );
}

export default UserCard;
