import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setIsLoggedIn(!!userData);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const isProfilePage = location.pathname === '/profile';
    const accessToken = userData?.accessToken;

    if (isProfilePage && !accessToken) {
      window.location.href = '/signup';
    } else if (location.pathname === '/signup' && accessToken) {
      window.location.href = '/profile';
    }
  }, [location]);

  return (
    <header className="header">
      <div className="logo">Header</div>
      <nav>
        <div className="links">
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
