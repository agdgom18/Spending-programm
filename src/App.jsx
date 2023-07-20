import './App.css';
import Costs from './assets/component/Costs';
import NewCost from './assets/component/Newcost/NewCost';

function App() {
  return (
    <div className="app">
      <NewCost />
      <Costs />
    </div>
  );
}

export default App;
