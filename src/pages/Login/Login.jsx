import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginUI from './LoginUI';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginauth = (e) => {
    e.preventDefault();

    if (username === 'dev@gmail.com' && password === 'devbox') {
      setIsAuthenticated(true);
      navigate('/dashboard', { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginUI 
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      loginauth={loginauth}
    />
  );
}

export default Login;
