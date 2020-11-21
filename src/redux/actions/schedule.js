import axios from 'axios';

export const setSchedule = (schedule) => ({
  type: "SET_SCHEDULE",
  payload: schedule,
});

export const setScheduleInfo = (scheduleInfo) => ({
  type: "SET_SCHEDULE_INFO",
  payload: scheduleInfo,
});

export const setScheduleLink = (sheduleLink) => ({
  type: "SET_SCHEDULE_LINK",
  payload: sheduleLink,
});

export const fetchSchedule = (dayOfWeek) => (dispatch) => {
  axios.get(`https://schedule-parser.herokuapp.com/ipz32`).then(({data}) => {
    // dispatch(setSchedule(data.data.schedule));
    dispatch(setScheduleInfo(data.data.info));
  });

  axios.get(`https://schedule-parser.herokuapp.com/url`).then(({data}) => {
    dispatch(setScheduleLink(data.data.downloadUrl));
  })
}

