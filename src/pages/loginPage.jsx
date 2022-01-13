import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SWAPIService from "../Services/SWAPIService";
import { AutoComplete } from "antd";
import store from "../utils/store";
import actions from "../utils/actions";
const LoginPage = () => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState([]);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(actions.LOGIN(value));
    console.log(store.getState());

    history.push("/user");
  };

  const onChange = (data) => {
    setValue(data);
  };

  const onSearch = async (searchText) => {
    const res = await SWAPIService.search(searchText);
    setOption(res);
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <div id="login-form">
      <p id="login-label">Who are you?</p>
      <form onSubmit={handleSubmit}>
        <div id="autocomplete">
          <AutoComplete
            style={{ borderRadius: "10px", width: "80%", height: "20%" }}
            value={value}
            options={option}
            onSearch={onSearch}
            onChange={onChange}
            onSelect={onSelect}
            placeholder="your character name"
          />
        </div>
        <button id="login-button" disabled={!value}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
