import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';

const generateAccessToken = () => {
  const token = CryptoJS.lib.WordArray.random(16).toString();
  return token;
};

const storeUserData = (userData) => {
  const accessToken = generateAccessToken();
  const userWithToken = { ...userData, accessToken };
  localStorage.setItem('userData', JSON.stringify(userWithToken));
};

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPass] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName && !email && !password && !confPassword) {
      setFormError('Error : All the fields are mandatory');
      setFormSuccess('');
      return;
    }
    if (password !== confPassword) {
      setFormError('Passwords do not match');
      setFormSuccess('');
      return;
    }
    setFormError('');
    setFormSuccess('Successfully Signed Up!');
    setTimeout(() => {
      setFormSuccess('');
    }, 2000);

    const userData = { fullName, email, password };
    storeUserData(userData);

    setFullName('');
    setEmail('');
    setPassword('');
    setConfPass('');
  };

  return (
    <div>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="eg2">
            <h1>Signup</h1>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confPassword}
              onChange={(e) => setConfPass(e.target.value)}
            />
            <button type="submit" className="eg5">
              Signup
            </button>
            {formError && <p style={{ color: 'red' }}>{formError}</p>}
            {formSuccess && <p style={{ color: 'green' }}>{formSuccess}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;