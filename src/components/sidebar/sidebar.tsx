import React from "react";
import { useDispatch } from "react-redux";
import { sorting } from "../../constants";
import { changeSorting } from "../../redux/slices/sortSlice";
import BaseBtn from "../shared/baseBtn/baseBtn";
import styles from "./sidebar.module.scss";

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();

  const renderSorting = (arr: string[]): JSX.Element[] => {
    return arr.map((el) => (
      <BaseBtn
        text={el}
        key={el}
        background="#4b51ef"
        onClick={() => dispatch(changeSorting(el))}
      />
    ));
  };

  return (
    <aside className={styles.sidebar}>
      <h5 className={styles.title}>Сортировка</h5>
      {renderSorting(sorting)}
    </aside>
  );
}

export default Sidebar;
