import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  return(
    <div>
      <Countries></Countries>
    </div>
  )
}

export default App;
