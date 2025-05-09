import React, { useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import events from "./data/events.json";

function App() {
  const [date, setDate] = useState(dayjs());

  const nextMonth = () => setDate(date.add(1, "month"));
  const prevMonth = () => setDate(date.subtract(1, "month"));
  const goToToday = () => setDate(dayjs());

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Header
            month={date.format("MMMM")}
            year={date.format("YYYY")}
            onNext={nextMonth}
            onPrev={prevMonth}
            onToday={goToToday}
          />
          <CalendarGrid currentDate={date} events={events} />
        </div>
      </div>
    </div>
  );
}

export default App;