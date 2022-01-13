import React from "react";
import { useHistory } from "react-router-dom";
import store from "../utils/store";

const NotFoundPage = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("test");
    store.getState() ? history.push("/user") : history.push("/login");
  };
  return (
    <div id="not-found">
      <p>Cannot find planet 404</p>
      <button onClick={handleClick}>Log In</button>
    </div>
  );
};

export default NotFoundPage;
