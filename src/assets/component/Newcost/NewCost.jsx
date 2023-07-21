import React from 'react';
import CostForm from './CostForm';
import './styles/newCost.css';

const NewCost = (props) => {
  const saveCostDatahandler = (data) => {
    const dataCost = {
      id: Math.random().toString(),
      ...data,
    };
    props.onAddCost(dataCost);
  };
  return (
    <div className="new-cost">
      <CostForm onSaveDataForm={saveCostDatahandler} />
    </div>
  );
};

export default NewCost;
