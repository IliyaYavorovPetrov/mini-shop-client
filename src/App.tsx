import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './auth/pages/SignUp';
import SignIn from './auth/pages/SignIn';
import Home from './home/pages/Home';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
