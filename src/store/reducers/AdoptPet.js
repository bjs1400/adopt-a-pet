const initialState = {
  step: 1,
  pets: [],
  usersPets: null,
  loading: true
};

// const nextStep = (state = initialState, action) => {
//   return {
//     ...state,
//     step: state.step + 1
//   };
// };

// const prevStep = (state = initialState, action) => {
//   return {
//     ...state,
//     step: state.step - 1
//   };
// };

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true
      };
    case "RETURN_PETS":
      return {
        ...state,
        pets: action.pets,
        loading: false
      };
    case "RETURN_USERS_PETS":
      return {
        ...state,
        loading: false,
        usersPets: action.usersPets
      };
    default:
      return state;
  }
};

export default petReducer;
