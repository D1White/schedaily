import { combineReducers } from 'redux';

import dayOfWeekReducer from './dayOfWeek';

const rootReducer = combineReducers({
  dayOfWeek: dayOfWeekReducer,
});

export default rootReducer;