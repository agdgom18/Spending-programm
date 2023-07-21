import './App.css';
import Costs from './assets/component/Costs';
import NewCost from './assets/component/Newcost/NewCost';

function App() {
  const data = [
    { id: 'c-1', date: new Date('2023,1,23'), description: 'Tv', amount: 933 },
    { id: 'c-2', date: new Date('2023,3,13'), description: 'Jeans', amount: 933 },
    { id: 'c-3', date: new Date('2023,4,13'), description: 'Flat', amount: 91234 },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('we are in app');
  };
  return (
    <div className="app">
      <NewCost onAddCost={addCostHandler} />
      <Costs cost={data} />
    </div>
  );
}

export default App;
