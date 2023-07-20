import React from 'react';
import './styles/costItem.css';
import CostDate from './CostDate';
import Card from './Card';
import { useState } from 'react';

const CostItem = ({ costDate, costDescription, costAmount }) => {
  const [desc, setDesc] = useState(costDescription);

  const changeDescHandler = () => {
    setDesc('New Cost');
    console.log(desc);
  };

  return (
    <Card className="cost-item ">
      <CostDate dateMod={costDate} />
      <div className="cost-item__description">
        <h2>{desc}</h2>
        <div className="cost-item__price">${costAmount}</div>
      </div>
      <button onClick={changeDescHandler}>Change</button>
    </Card>
  );
};

export default CostItem;
