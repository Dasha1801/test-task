import React from "react";
import UserCard from "../userCard/userCard";
import styles from "./userList.module.scss";

function UserList(): JSX.Element {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Список пользователей</h2>
      <UserCard />
      <h6 className={styles.countUser}>Найдено 10 пользователей</h6>
    </main>
  );
}

export default UserList;
