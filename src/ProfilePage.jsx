import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './App.css'
const ProfilePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      navigate('/signup');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/signup');
  };

  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className='eg2'>
      <h1>Profile</h1>
      <p>Full Name: {userData.fullName}</p>
      <p>Email: {userData.email}</p>
      <p>Password:{userData.password}</p>
      <button onClick={handleLogout}className="eg5">Logout</button>
    </div>
  );
};

export default ProfilePage;