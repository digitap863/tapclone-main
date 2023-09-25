import React from "react";

const ShortDate = () => {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = currentDate
    .toLocaleDateString("en-US", options)
    .replace(",", "")
    .replace(/(\d+)\/(\d+)/, "$2.$1")
    .replace(/(\w+)\s(\d+\.\d+)/, "$1\u00A0\u00A0$2")
    // .replace(/(\w+)\s(\d+\.\d+)/, "$1\u00A0$2")
    .toUpperCase();
  return <div className="nav-date ">{formattedDate}</div>;
};

export default ShortDate;
