import React from "react";
import LoadingSpin from "react-loading-spin";
import styles from "./spinner.module.scss";

function Spinner(): JSX.Element {
  return (
    <div className={styles.wrapperLoader}>
      <div className={styles.parentLoader}>
        <LoadingSpin
          size="150px"
          primaryColor="#4b51ef"
          secondaryColor="gray"
        />
      </div>
    </div>
  );
}

export default Spinner;
