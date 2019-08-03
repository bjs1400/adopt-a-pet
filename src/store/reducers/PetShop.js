const initialState = {
  storeInventory: null,
  item: null,
  status: null, //fetching, foundItems, noItems
  usersItems: "loading",
  noItemsFound: false,
  loading: true,
  itemFetched: null,
  specificItems: null
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
        loading: true,
        usersItems: "loading"
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
    case "RETURN_SPECIFIC_ITEMS":
      return {
        ...state,
        specificItems: action.specificItems
      };
    default:
      return state;
  }
};

export default shopReducer;
