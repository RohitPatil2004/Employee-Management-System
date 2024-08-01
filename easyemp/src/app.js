import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
