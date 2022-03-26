import React from "react";
import Sidebar from "../sidebar/sidebar";
import UserList from "../userList/userList";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <UserList />
    </div>
  );
}

export default App;
