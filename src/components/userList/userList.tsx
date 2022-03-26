import React, { useCallback, useEffect, useState } from "react";
import { fetchUsers } from "../../api";
import { IUserCard } from "../shared/interfaces";
import Spinner from "../spinner/spinner";
import UserCard from "../userCard/userCard";
import styles from "./userList.module.scss";

function UserList(): JSX.Element {
  const [userList, setUserList] = useState([] as IUserCard[]);

  const getUsers = useCallback(async (): Promise<void> => {
    const users = await fetchUsers();
    setUserList(users);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 1500);
  }, [getUsers]);

  const renderCards = (arr: IUserCard[]): JSX.Element[] | null => {
    return arr.length
      ? arr.map((el) => <UserCard info={el} key={el.id} />)
      : null;
  };

  return (
    <main className={styles.main}>
      {userList.length ? (
        <>
          <h2 className={styles.title}>Список пользователей</h2>
          {renderCards(userList)}
          <h6 className={styles.countUser}>
            Найдено {userList.length} пользователей
          </h6>
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
}

export default UserList;
