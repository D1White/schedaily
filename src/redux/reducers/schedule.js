const initialState = {
  schedule: null,
  scheduleInfo: null,
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCHEDULE":
      return {
        ...state,
        schedule: action.payload,
      };
    case "SET_SCHEDULE_INFO":
      return {
        ...state,
        scheduleInfo: action.payload,
      };
    default:
      return state;
  }
};

export default schedule;