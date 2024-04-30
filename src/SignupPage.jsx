import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const SignupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      navigate('/profile');
    }
  }, [navigate]);

  return (
    <div>
      <Form />
    </div>
  );
};

export default SignupPage;