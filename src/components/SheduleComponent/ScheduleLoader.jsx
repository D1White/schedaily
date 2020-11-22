import React from "react";
import ContentLoader from "react-content-loader";

function ScheduleLoader() {
  return (
    <ContentLoader 
    speed={3}
    width={744}
    height={224}
    viewBox="0 0 744 224"
    backgroundColor="#EFF0F6"
    foregroundColor="#A0A3BD"
  >
    <rect x="0" y="0" rx="7" ry="7" width="90" height="72" /> 
    <rect x="127" y="19" rx="2" ry="2" width="4" height="203" /> 
    <circle cx="128" cy="8" r="8" /> 
    <rect x="247" y="0" rx="30" ry="30" width="497" height="180" />
  </ContentLoader>
  );
}

export default ScheduleLoader;
