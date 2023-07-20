import React from 'react';
import './styles/costDate.css';
const CostDate = ({ dateMod }) => {
  const month = dateMod.toLocaleString('en-US', { month: 'long' });
  const year = dateMod.getFullYear();
  const day = dateMod.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div>
      <div className="cost-date ">
        <div className="cost-date__month">{month}</div>
        <div className="cost-date__year">{year}</div>
        <div className="cost-date__day">{day}</div>
      </div>
    </div>
  );
};

export default CostDate;
