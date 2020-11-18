const initialState = {
  dayOfWeek: null,
};

const dayOfWeek = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DAY_OF_WEEK":
      return {
        ...state,
        dayOfWeek: action.payload,
      };
    default:
      return state;
  }
};

export default dayOfWeek;