import React from "react";
import { IPropsCard } from "../shared/interfaces";
import styles from "./userCard.module.scss";

function UserCard({ info }: IPropsCard): JSX.Element {
  const { name, address, company } = info;

  return (
    <div className={styles.card}>
      <ul>
        <li className={styles.item}>
          <span className={styles.field}>ФИО:</span>
          {name}
        </li>
        <li className={styles.item}>
          <span className={styles.field}>город:</span>
          {address.city}
        </li>
        <li className={styles.item}>
          <span className={styles.field}>компания:</span>
          {company.name}
        </li>
      </ul>
      <input type="button" value="Подробнее" className={styles.btn} />
    </div>
  );
}

export default UserCard;
