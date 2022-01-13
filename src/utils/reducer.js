export function dataReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE":
  }
}

export function loginReducer(state = "", action) {
  switch (action.type) {
    case "LOGIN": {
      return action.payload.input;
    }
  }
}
