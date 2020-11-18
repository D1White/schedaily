import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { setDayOfWeek } from '../redux/actions/dayOfWeek';

const dayOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function CalendarComp({ index }) {
  const dispatch = useDispatch();

  const activeDayOfWeek = useSelector(({ dayOfWeek }) => dayOfWeek.dayOfWeek);

  let date = new Date();
  date.setDate(date.getDate() - (date.getDay() - index - 1));

  const dateClick = () => {
    if (index < 5) {
      dispatch(setDayOfWeek(index));
    }
  }

  return (
    <div className={`
      calendar__component
      ${index > 4 ? 'disable' : ''}
      ${index === activeDayOfWeek ? 'active' : ''}
      ${index === 5 && activeDayOfWeek === 6  ? 'active' : ''}
      `}
      onClick={dateClick} 
    >
      <span className={`
        calendar__dayOfWeek ${index > 4 ? 'disable' : ''}
        ${index === activeDayOfWeek ? 'active' : ''}
        ${index === 5 && activeDayOfWeek === 6  ? 'active' : ''}
      `}>
        {dayOfWeek[index]}
      </span>
      <span className={`
        calendar__date ${index > 4 ? 'disable' : ''}
        ${index === activeDayOfWeek ? 'active' : ''}
        ${index === 5 && activeDayOfWeek === 6  ? 'active' : ''}
      `}>
        {date.getDate()}
      </span>
    </div>
  );
}

export default CalendarComp;
