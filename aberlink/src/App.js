import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Display from './routes/Display';

function App() {
  return (
    <>
      <Routes>
        <Route path="/display/:id" element={<Display />} />
      </Routes>
    </>
  );
}

export default App;
