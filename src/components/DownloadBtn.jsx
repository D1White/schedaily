import React from "react";
import { useSelector } from "react-redux";

import download from "../assets/img/download.svg";

function DownloadBtn() {
  const sheduleLink = useSelector(({ schedule }) => schedule.sheduleLink);
  return (
    <div className="download">
      {sheduleLink && (
        <a href={sheduleLink} download>
          <button className="download-btn">
            <span>Скачать рассписание</span>
            <img src={download} alt="download" />
          </button>
        </a>
      )}
    </div>
  );
}

export default DownloadBtn;
