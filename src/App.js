import './App.css';
import { useState } from 'react';

function App() {

  const [tasbeeh,setTasbeeh] = useState(0);

  return (
    <div className="App">
      
      <h1>Counter App </h1>

      <p> count :  {tasbeeh} </p>
      <button onClick={ ()=> setTasbeeh(tasbeeh+1) } > increment  </button>
      <button  onClick={ ()=> setTasbeeh(tasbeeh-1) }> decrement  </button>

    </div>
  );
}

export default App;
