export const SEARCH = (input) => {
  return {
    type: "SEARCH",
    payload: {
      input: input,
    },
  };
};

export const LOGIN = (input) => {
  return {
    type: "LOGIN",
    payload: {
      input: input,
    },
  };
};

export default { SEARCH, LOGIN };
