import { Route, Routes } from 'react-router-dom';
import Greet from './components/Greet/Greet';
import Counter from './components/Counter/Counter';
import StarWars from './components/StarWars/StarWars';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/greet' element={<Greet name='there' message='how are you?' />} />
      <Route path='/count' element={<Counter initialState={0} />} />
      <Route path='/api' element={<StarWars />} />
    </Routes>
  );
}

export default App;
