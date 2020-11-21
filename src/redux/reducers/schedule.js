const initialState = {
  schedule: null,
  scheduleInfo: null,
  sheduleLink: null,
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
    case "SET_SCHEDULE_LINK":
      return {
        ...state,
        sheduleLink: action.payload,
      };
    default:
      return state;
  }
};

export default schedule;