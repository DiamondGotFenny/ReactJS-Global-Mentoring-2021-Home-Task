import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/search" replace={true} />}
          />
          <Route path="/search" element={<Home />} />
          <Route path="/search/:searchQuery" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
