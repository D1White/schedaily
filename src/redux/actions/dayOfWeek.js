import axios from 'axios';

import { setSchedule } from './schedule';

export const setDayOfWeek = (setDayOfWeek) => ({
  type: "SET_DAY_OF_WEEK",
  payload: setDayOfWeek,
});

export const fetchDayOfWeek = (dayOfWeek) => (dispatch) => {
  dispatch(setDayOfWeek(dayOfWeek));
  axios.get(`https://schedule-parser.herokuapp.com/ipz32/${dayOfWeek+1}`).then(({data}) => {
    dispatch(setSchedule(data));
  })
}
