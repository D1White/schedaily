import { combineReducers } from 'redux';

import dayOfWeekReducer from './dayOfWeek';
import scheduleReducer from './schedule';

const rootReducer = combineReducers({
  dayOfWeek: dayOfWeekReducer,
  schedule: scheduleReducer,
});

export default rootReducer;