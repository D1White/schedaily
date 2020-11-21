import axios from 'axios';

export const setSchedule = (schedule) => ({
  type: "SET_SCHEDULE",
  payload: schedule,
});

export const setScheduleInfo = (scheduleInfo) => ({
  type: "SET_SCHEDULE_INFO",
  payload: scheduleInfo,
});

export const fetchSchedule = (dayOfWeek) => (dispatch) => {
  axios.get(`https://schedule-parser.herokuapp.com/ipz32`).then(({data}) => {
    // dispatch(setSchedule(data.data.schedule));
    dispatch(setScheduleInfo(data.data.info));
  })
}

