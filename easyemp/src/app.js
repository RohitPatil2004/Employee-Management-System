import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Home from './Pages/Home';
import LoginAndSignup from './Pages/Login&Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<LoginAndSignup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
