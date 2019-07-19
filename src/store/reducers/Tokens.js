const initialState = {
  tokens: null
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RETURN_TOKENS": {
      return {
        ...state,
        tokens: action.tokens
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default tokenReducer;
