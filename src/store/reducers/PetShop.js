const initialState = {
  storeInventory: null
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RETURN_INVENTORY":
      return {
        ...state,
        storeInventory: action.inventory
      };
    default:
      return state;
  }
};

export default shopReducer;
