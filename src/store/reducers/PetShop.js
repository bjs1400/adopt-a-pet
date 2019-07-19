const initialState = {
  storeInventory: null,
  item: null,
  status: null, //fetching, foundItems, noItems
  usersItems: null,
  noItemsFound: false,
<<<<<<< HEAD
  loading: true,
  itemFetched: null
=======
  loading: true
>>>>>>> 5f2d6c651aa7fcd236efb8ca10519e69bb7420ac
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
<<<<<<< HEAD
        storeInventory: action.inventory,
        loading: false
=======
        loading: false,
        storeInventory: action.inventory
>>>>>>> 5f2d6c651aa7fcd236efb8ca10519e69bb7420ac
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
        noItemsFound: true
      };
    default:
      return state;
  }
};

export default shopReducer;
