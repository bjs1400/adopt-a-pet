const initialState = {
  token: null,
  userId: null,
  loading: false,
  errorMessage: "",
  result: "",
  currentUser: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        loading: true,
        currentUser: null
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        result: action.result,
        currentUser: action.currentUser,
        loading: false
      };
    case "AUTH_FAIL":
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
        currentUser: null
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default authReducer;
