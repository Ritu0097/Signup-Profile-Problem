import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;