import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
