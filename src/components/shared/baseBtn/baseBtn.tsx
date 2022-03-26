import React from "react";
import { IPropsBtn } from "../interfaces";
import styles from "./baseBtn.module.scss";

function BaseBtn({ text, background, onClick }: IPropsBtn): JSX.Element {
  return (
    <button
      style={{ backgroundColor: background }}
      className={styles.baseButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default BaseBtn;
