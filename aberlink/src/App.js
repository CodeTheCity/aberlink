import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Display from './routes/Display';
import Visit from './routes/Visit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/display/:id" element={<Display />} />
        <Route path="/visit/:id" element={<Visit />} />
      </Routes>
    </>
  );
}

export default App;
