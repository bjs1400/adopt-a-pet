const initialState = {
  storeInventory: null,
  item: null
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RETURN_INVENTORY":
      return {
        ...state,
        storeInventory: action.inventory
      };
    case "RETURN_ITEM":
      return {
        ...state,
        item: action.item
      };
    default:
      return state;
  }
};

export default shopReducer;
