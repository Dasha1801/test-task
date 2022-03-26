import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProfile } from "../../redux/slices/profileSlice";
import { IPropsCard } from "../shared/interfaces";
import styles from "./userCard.module.scss";

function UserCard({ info }: IPropsCard): JSX.Element {
  const dispatch = useDispatch();
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
      <NavLink to="/profile">
        <input
          type="button"
          value="Подробнее"
          className={styles.btn}
          onClick={() => dispatch(getProfile(info))}
        />
      </NavLink>
    </div>
  );
}

export default UserCard;
