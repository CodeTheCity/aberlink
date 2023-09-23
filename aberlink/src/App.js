import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Display from './routes/display';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Display />} />
      </Routes>
    </>
  );
}

export default App;
