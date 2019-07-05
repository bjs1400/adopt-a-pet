const initialState = {
  step: 1,
  pets: []
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
    case "RETURN_PET":
      return {
        ...state,
        pets: action.pets
      };
    default:
      return state;
  }
};

export default petReducer;
