import logo from './logo.svg';
import './App.css';
import Create from './pages/Create';
import Fetch from './pages/Fetch';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Sale Management System</h1>
       <Create/>
       <Fetch/>
       <Update/>

      </header>
    </div>
  );
}

export default App;
