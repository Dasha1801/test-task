import React from "react";
import { IPropsBtn } from "../interfaces";
import styles from "./baseBtn.module.scss";

function BaseBtn({ text, background }: IPropsBtn): JSX.Element {
  return (
    <button style={{ backgroundColor: background }} className={styles.baseButton}>
      {text}
    </button>
  );
}

export default BaseBtn;
