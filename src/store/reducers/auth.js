const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  message: "",
  result: "",
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        message: "SUCCESS",
        result: action.result,
        currentUser: action.currentUser
      };
    case "AUTH_FAIL":
      return {
        ...state,
        message: "FAIL",
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
