import React from 'react';
import Greet from './components/Greet/Greet';
import Counter from './components/Counter/Counter';
import StarWars from './components/StarWars/StarWars';

function App() {
  return (
    <div className="App">
      <p data-testid="text">hello</p>
      <Greet name='there' message='how are you?' />
      <Counter initialState={0} />
      <StarWars />
    </div>
  );
}

export default App;
