import React, { useState } from "react";
import dayjs from "dayjs";
import Header from "./Header";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  
  // Sample events data
  const [events] = useState([
    {
      id: 1,
      title: "Team Meeting",
      date: dayjs().format("YYYY-MM-DD"),
      time: "10:00 AM",
      description: "Weekly team sync",
      location: "Conference Room A"
    },
    {
      id: 2,
      title: "Lunch with Client",
      date: dayjs().add(2, 'day').format("YYYY-MM-DD"),
      time: "12:30 PM"
    }
  ]);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleToday = () => {
    setCurrentDate(dayjs());
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Header
          month={currentDate.format("MMMM")}
          year={currentDate.format("YYYY")}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
          onToday={handleToday}
        />
        <CalendarGrid 
          currentDate={currentDate} 
          events={events} 
        />
      </div>
    </div>
  );
}