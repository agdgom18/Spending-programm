import React from 'react';
import './styles/costItem.css';
import CostDate from './CostDate';
import Card from './Card';

const CostItem = ({ costDate, costDescription, costAmount }) => {
  return (
    <Card className="cost-item ">
      <CostDate dateMod={costDate} />
      <div className="cost-item__description">
        <h2>{costDescription}</h2>
        <div className="cost-item__price">${costAmount}</div>
      </div>
    </Card>
  );
};

export default CostItem;
