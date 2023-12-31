import React from 'react';
import './styles/costForm.css';
import { useState } from 'react';

const CostForm = (props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const nameChangehandler = (e) => {
    setName(e.target.value);
  };
  const amountChangehandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangehandler = (e) => {
    setDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const costData = { name: name, amount: amount, date: new Date(date) };

    props.onSaveDataForm(costData);

    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input value={name} type="text" onChange={nameChangehandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input value={amount} type="number" min="1" step="1" onChange={amountChangehandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input value={date} type="date" min="2020-01-01" step="2023-12-31" onChange={dateChangehandler} />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
