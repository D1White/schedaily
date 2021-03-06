import React from "react";
import { useDispatch } from 'react-redux';

import { CalendarComp } from './'
import { fetchDayOfWeek } from '../redux/actions/dayOfWeek';

const dayOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function Calendar() {

  const dispatch = useDispatch();
  const todayDate = new Date();

  React.useEffect(() => {
    if (todayDate.getDay() >= 6 || todayDate.getDay() === 0) {
      dispatch(fetchDayOfWeek(0));
    }else {
      dispatch(fetchDayOfWeek(todayDate.getDay() - 1));
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main__calendar">
      { dayOfWeek.map((obj, index) => (
        <CalendarComp
          index={index}
          key={`${obj}_${index}`}
        />
      ))}
    </div>
  );
}

export default Calendar;
