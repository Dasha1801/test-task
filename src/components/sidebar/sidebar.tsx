import React from "react";
import BaseBtn from "../shared/baseBtn/baseBtn";
import { sorting } from "../shared/constants";
import styles from "./sidebar.module.scss";

function Sidebar(): JSX.Element {
  const renderSorting = (arr: string[]): JSX.Element[] => {
    return arr.map((el) => <BaseBtn text={el} key={el} background="#4b51ef" />);
  };

  return (
    <aside className={styles.sidebar}>
      <h5 className={styles.title}>Сортировка</h5>
      {renderSorting(sorting)}
    </aside>
  );
}

export default Sidebar;
