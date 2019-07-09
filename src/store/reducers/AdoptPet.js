const initialState = {
  step: 1,
  pets: [],
  usersPets: null
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
    case "RETURN_PETS":
      return {
        ...state,
        pets: action.pets
      };
    case "RETURN_USERS_PETS":
      return {
        ...state,
        usersPets: action.usersPets
      };
    default:
      return state;
  }
};

export default petReducer;
