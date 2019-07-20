const initialState = {
  storeInventory: null,
  item: null,
  status: null, //fetching, foundItems, noItems
  usersItems: null,
  noItemsFound: false,
  loading: true,
  itemFetched: null
};
// ADD FETCH FAIL LATER
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEM_START":
      return {
        ...state,
        itemFetched: "loading"
      };
    case "FETCH_START":
      return {
        ...state,
        loading: true
      };
    case "RETURN_INVENTORY":
      return {
        ...state,
        storeInventory: action.inventory,
        loading: false
      };
    case "RETURN_ITEM":
      return {
        ...state,
        itemFetched: "itemFound",
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
        usersItems: null
      };
    default:
      return state;
  }
};

export default shopReducer;
