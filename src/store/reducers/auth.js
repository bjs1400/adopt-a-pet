const initialState = {
  token: null,
  userId: null,
  loading: false,
  errorMessage: null,
  result: "",
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  authRedirectPath: "/",
  tokens: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        loading: true,
        currentUser: null,
        errorMessage: null
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        currentUser: action.currentUser,
        loading: false,
        isAuthenticated: true,
        errorMessage: null,
        token: action.token
      };
    case "AUTH_FAIL":
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
        currentUser: null,
        isAuthenticated: false,
        token: null
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
        isAuthenticated: false,
        token: null
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        errorMessage: null
      };
    case "RETURN_TOKENS":
      return {
        ...state,
        tokens: action.tokens
      };
    default:
      return state;
  }
};

export default authReducer;
