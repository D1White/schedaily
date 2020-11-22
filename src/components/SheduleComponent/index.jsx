import { useEffect, useState, useRef } from "react";

import radio_filled from '../../assets/img/radio_filled.svg';
import radio from '../../assets/img/radio.svg';

const coupleStart = ['09:00', '10:30', '12:10', '13:40'];
const coupleEnd = ['10:20', '11:50', '13:30', '15:00'];

function ScheduleComponent({ couple, teacher, index }) {
  const date = new Date();
  const minutes = date.getHours() * 60 + date.getMinutes();

  const sheduleBlock = useRef();

  const [active, setActive] = useState(false);
  const [lineHeight, setLineHeight] = useState(180);

  useEffect(() => {
    if (index === 0 && minutes >= 540 && minutes <= 620 ) {
      setActive(true);
    }
    if (index === 1 && minutes >= 630 && minutes <= 710 ) {
      setActive(true);
    }
    if (index === 2 && minutes >= 730 && minutes <= 810 ) {
      setActive(true);
    }
    if (index === 3 && minutes >= 820 && minutes <= 900 ) {
      setActive(true);
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (sheduleBlock.current) {
      setLineHeight(sheduleBlock.current.offsetHeight + 20);
    }
  }, [sheduleBlock])

  return (
    <div className="schedule__component">
      <div className="schedule__time">
        <span className="schedule__time-start">{coupleStart[index]}</span>
        <span className="schedule__time-end">{coupleEnd[index]}</span>
      </div>

      <div className="timeline">
        <img src={ active ? radio_filled : radio } alt="radio filled" />
        { index < 3 &&
          (<hr
            className="timeline__line"
            style={{ height: `${lineHeight}px` }}/>
          )
        }
      </div>

      <div className={`schedule__info ${active ? 'active' : ''} ${couple ? '' : 'disable'}`} ref={sheduleBlock} >
        <h2 className={`schedule__couple ${active ? 'active' : ''} ${couple ? '' : 'disable'}`}>
          { couple ? couple : 'Немає пари 🥳' }
        </h2>
        { couple && (
          <div className="schedule__info__footer">
            <span className={`schedule__teacher ${active ? 'active' : ''}`}>{teacher};</span>
            <span className={`schedule__teacher ${active ? 'active' : ''}`}>онлайн</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduleComponent;
