import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <People 
      name={"Doe,Jane"} 
      age={49}
      hairColor={"Black"}/> 
      
      <People 
      name={"Smith, John"} 
      age={88}
      hairColor={"Brown"}/> 
      
      <People 
      name={"Vazquez, Gaby"} 
      age={21}
      hairColor={"Dark Brown?"}/> 
    </div>
  );
}

export default App;
