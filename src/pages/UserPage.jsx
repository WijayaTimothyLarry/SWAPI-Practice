import React, { useEffect, useState } from "react";
import SWAPIService from "../Services/SWAPIService";
import store from "./../utils/store";

const UserPage = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  const onClick = () => {
    window.location = "./";
  };

  useEffect(async () => {
    console.log("tesett", store.getState());
    setUser(store.getState());
    console.log("current state", user);
    const data = await SWAPIService.login(user);
    console.log("data", data);
    setUserData(data);
  });

  const parseData = (userData) => {
    return (
      <div>
        <p>name: {userData.name}</p>
        <p>height: {userData.height}</p>
        <p>mass: {userData.mass}</p>
        <p>birth_year: {userData.birth_year}</p>
        <p>gender:{userData.gender}`</p>
      </div>
    );
  };
  return (
    <div id="login-form">
      <div>Hi, {user}</div>
      <div style={{ "background-color": "white", margin: "1px" }}>
        {" "}
        {parseData(userData)}
      </div>
      <button onClick={onClick}>Sign Out</button>
    </div>
  );
};

export default UserPage;
