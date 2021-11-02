import './App.css';
import Home from './pages/Home';
import { MoviesContextProvide } from './Context/moviesContext';

function App() {
  return (
    <div className="App">
      <MoviesContextProvide>
        <Home />
      </MoviesContextProvide>
    </div>
  );
}

export default App;
