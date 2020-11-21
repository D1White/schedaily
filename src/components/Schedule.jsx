import React from "react";
import { useSelector } from 'react-redux';

import { ScheduleComponent } from './'

function Schedule() {

  const schedule = useSelector(({ schedule }) => schedule.schedule);

  // React.useEffect(() => {
  //  console.log(schedule);
  // }, [schedule])

  return (
    <div className="schedule">
      { schedule && schedule.map((obj, index) => (
        <ScheduleComponent
          couple={obj.subject}
          teacher={obj.teacher}
          index={index}
          key={`${obj.teacher.length}_${index}`}
        />
      )) }
    </div>
  );
}

export default Schedule;
