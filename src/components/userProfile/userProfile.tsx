import React, { useState } from "react";
import FormProfile from "../form/formProfile";
import BaseBtn from "../shared/baseBtn/baseBtn";
import styles from "./userProfile.module.scss";

function UserProfile(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Профиль пользоваетля</h2>
        <BaseBtn
          text="Редактировать"
          background="#4b51ef"
          onClick={() => setIsDisabled(false)}
        />
      </div>
      <FormProfile isReadOnly={isDisabled} />
    </main>
  );
}

export default UserProfile;
