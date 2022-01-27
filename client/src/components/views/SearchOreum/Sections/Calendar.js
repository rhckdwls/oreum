import React, { useState } from "react";
import Calendare from "react-calendar";

import "react-calendar/dist/Calendar.css";

function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="me-md-3">
      <Calendare onChange={onChange} value={value} className="img-fluid" />
    </div>
  );
}

export default Calendar;
