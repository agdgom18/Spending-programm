import React from 'react';
import CostItem from './CostItem';
import Card from './Card';
import CostsFilter from './CostFilter';
import { useState } from 'react';
const Costs = ({ cost }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const onChangeYear = (year) => {
    setSelectedYear(year);
    console.log(year);
    console.log('we are in costs');
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={onChangeYear} />
        {cost.map((el, ind) => {
          return <CostItem key={ind} costDate={el.date} costDescription={el.description} costAmount={el.amount} />;
        })}
      </Card>
    </div>
  );
};

export default Costs;
