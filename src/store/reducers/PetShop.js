const initialState = {
  storeInventory: null,
  item: null,
  loading: true
};
// ADD FETCH FAIL LATER
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true
      };
    case "RETURN_INVENTORY":
      return {
        ...state,
        storeInventory: action.inventory
      };
    case "RETURN_ITEM":
      return {
        ...state,
        item: action.item,
        loading: false
      };
    default:
      return state;
  }
};

export default shopReducer;