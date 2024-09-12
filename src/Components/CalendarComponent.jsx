import { useState } from 'react';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(
        <button
          key={i}
          className={`day-button ${selectedDate === i ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button">&lt;</button>
        <span className="month-title">September 2024</span>
        <button className="nav-button">&gt;</button>
      </div>
      <div className="calendar-days">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
        <span>SUN</span>
      </div>
      <div className="calendar-grid">
        {renderDays()}
      </div>
    </div>
  );
};

export default CalendarComponent;
