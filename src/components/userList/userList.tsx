import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../api";
import { TStore } from "../../redux";
import { sortFunction } from "../../utils";
import { IUserCard } from "../shared/interfaces";
import Spinner from "../spinner/spinner";
import UserCard from "../userCard/userCard";
import styles from "./userList.module.scss";

function UserList(): JSX.Element {
  const { sort } = useSelector((state: TStore) => state.sort);
  const [userList, setUserList] = useState([] as IUserCard[]);

  const getUsers = useCallback(async (): Promise<void> => {
    const users = await fetchUsers();
    setUserList(users);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 1000);
  }, [getUsers]);

  const renderCards = useCallback(
    (arr: IUserCard[]): JSX.Element[] => {
      return (sort ? sortFunction(sort, arr) : arr).map((el) => (
        <UserCard info={el} key={el.id} />
      ));
    },
    [sort]
  );

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
