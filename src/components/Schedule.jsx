import React from "react";
import { useSelector } from 'react-redux';

import { ScheduleComponent, ScheduleLoader } from './'

function Schedule() {

  const schedule = useSelector(({ schedule }) => schedule.schedule);
  const scheduleLoad = useSelector(({ schedule }) => schedule.isLoaded);

  // React.useEffect(() => {
  //  console.log(schedule);
  // }, [schedule])

  return (
    <div className="schedule">
      { scheduleLoad
        ? schedule.map((obj, index) => (
          <ScheduleComponent
            couple={obj.subject}
            teacher={obj.teacher}
            index={index}
            key={`${obj.teacher.length}_${index}`}
          />
        )) : 
          Array(4).fill(0).map((_, index) => <ScheduleLoader key={index} />)
      }
    </div>
  );
}

export default Schedule;
