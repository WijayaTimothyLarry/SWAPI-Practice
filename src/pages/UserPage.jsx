import React, { useEffect, useState } from "react";
import store from "./../utils/store";

const UserPage = () => {
  const [user, setUser] = useState("");
  React.useEffect(() => {});

  const onClick = () => {
    window.location = "./";
  };

  useEffect(() => {
    console.log("tesett", store.getState());
    setUser(store.getState());
    console.log("current state", user);
  }, [user]);

  return (
    <div id="login-form">
      <div>Hi, {}</div>
    </div>
  );
};

export default UserPage;
