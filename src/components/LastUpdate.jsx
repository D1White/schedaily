import React from "react";
import { useSelector } from "react-redux";

function LastUpdate() {
  const scheduleInfo = useSelector(({ schedule }) => schedule.scheduleInfo);
  return (
    <div className="lastUpdate">
      <span className="lastUpdate__text">Время последнего обновления:</span>
      <span className="lastUpdate__text">
        { scheduleInfo && `${scheduleInfo.date}, ${scheduleInfo.time.slice(0,5)} GMT+0` }
      </span>
    </div>
  );
}

export default LastUpdate;
