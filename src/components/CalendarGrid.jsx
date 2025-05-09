import React from "react";
import dayjs from "dayjs";
import EventBadge from "./EventBadge";

export default function CalendarGrid({ currentDate, events, loading }) {
  const startOfMonth = currentDate.startOf("month").startOf("week");
  const endOfMonth = currentDate.endOf("month").endOf("week");

  const days = [];
  let day = startOfMonth.clone();

  while (day.isBefore(endOfMonth, "day") || day.isSame(endOfMonth, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("bg-blue-50");
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("bg-blue-50");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("bg-blue-50");
    // Handle the drop logic here (e.g., move an event)
  };

  if (loading) {
    return (
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-semibold py-3 text-center bg-gray-50 rounded-md">
            {d}
          </div>
        ))}
        {[...Array(42)].map((_, i) => (
          <div key={i} className="skeleton-day h-32 rounded bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-7 gap-1 bg-gray-100">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div key={d} className="font-semibold py-3 text-center bg-gray-50 rounded-md">
          {d}
        </div>
      ))}

      {days.map((d, idx) => {
        const isCurrentMonth = d.isSame(currentDate, "month");
        const isToday = d.isSame(dayjs(), "day");
        const dayEvents = events.filter((event) =>
          dayjs(event.date).isSame(d, "day")
        );

        return (
          <div
            key={idx}
            className={`
              border border-gray-100 p-2 min-h-[120px] 
              ${isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"}
              ${isToday ? "ring-2 ring-blue-500" : ""}
              transition-all duration-100
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div
              className={`text-right font-medium text-sm mb-1 
                ${isToday ? "text-blue-600" : ""}
                ${!isCurrentMonth ? "text-gray-300" : ""}
              `}
            >
              {d.date()}
            </div>
            <div className="space-y-1">
              {dayEvents.map((event, i) => (
                <EventBadge key={i} event={event} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
