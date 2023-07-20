import React from 'react';
import CostItem from './CostItem';
import Card from './Card';
const Costs = () => {
  const data = [
    {
      date: new Date('2023,1,23'),
      description: 'Tv',
      amount: 933,
    },
    {
      date: new Date('2023,3,13'),
      description: 'Jeans',
      amount: 933,
    },
    {
      date: new Date('2023,4,13'),
      description: 'Flat',
      amount: 91234,
    },
  ];
  return (
    <Card className="costs">
      {data.map((el, ind) => {
        return <CostItem key={ind} costDate={el.date} costDescription={el.description} costAmount={el.amount} />;
      })}
    </Card>
  );
};

export default Costs;
