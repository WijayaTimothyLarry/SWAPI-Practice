import http from "./httpService";
import config from "../utils/config.json";

const loginEndPoint = config.api + "api/people/?search=";

export const login = async (username) => {
  const { data } = await http.get(loginEndPoint + username);
  return data;
};

export const search = async (username) => {
  const { data } = await http.get(loginEndPoint + username);
  console.log(data);
  const nameList = data.results.map((bio) => {
    return { value: bio.name };
  });
  console.log(nameList);
  return nameList;
};

export default { login, search };
