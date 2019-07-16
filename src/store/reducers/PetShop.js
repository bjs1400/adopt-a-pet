const initialState = {
  storeInventory: null,
  item: null,
  status: null, //fetching, foundItems, noItems
  usersItems: null,
  noItemsFound: false,
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
        loading: false,
        storeInventory: action.inventory
      };
    case "RETURN_ITEM":
      return {
        ...state,
        item: action.item,
        loading: false
      };
    case "RETURN_USERS_ITEMS":
      return {
        ...state,
        usersItems: action.items,
        loading: false
      };
    case "NO_ITEMS_FOUND":
      return {
        ...state,
        loading: false,
        noItemsFound: true
      };
    default:
      return state;
  }
};

export default shopReducer;
