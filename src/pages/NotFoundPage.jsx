import React from "react";

const NotFoundPage = () => {
  const handleClick = () => {
    console.log("test");
    window.location = "/";
  };
  return (
    <div id="not-found">
      <p>Cannot find planet 404</p>
      <button onClick={handleClick}>Log In</button>
    </div>
  );
};

export default NotFoundPage;
