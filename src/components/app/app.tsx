import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import UserList from "../userList/userList";
import UserProfile from "../userProfile/userProfile";
import styles from "./app.module.scss";

function App() {
  const routes = [
    { path: "/", element: <UserList /> },
    { path: "/profile", element: <UserProfile /> },
  ];

  return (
    <div className={styles.app}>
      <Sidebar />

      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
