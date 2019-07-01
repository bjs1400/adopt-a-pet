const initialState = {
  step: 1
};

const nextStep = (state = initialState, action) => {
  return {
    step: state.step + 1
  };
};

const prevStep = (state = initialState, action) => {
  return {
    step: state.step - 1
  };
};

export default nextStep;
