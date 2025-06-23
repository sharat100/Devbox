import React, { useEffect, useState } from 'react';
import './LoginUI.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Container from '../../components/Container';
import Card from '../../components/card';

function LoginUI({ username, password, setUsername, setPassword, loginauth }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const loginCardStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '90%',
    maxWidth: '900px',
    minHeight: '500px',
    overflow: 'hidden',
    padding: 0,
  };

  return (
    <Container>
      <Card style={loginCardStyle}>
        <div className="Card-left">
          <h2>Hello, Developer!</h2>
          <h3>Welcome to Devbox</h3>
        </div>

        <div className="Card-right">
          <h2>Sign in</h2>
          <Form onSubmit={loginauth}>
            <Input
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot-link">Forgot your password?</a>
            <Button type="submit">SIGN IN</Button>
          </Form>
        </div>
      </Card>
    </Container>
  );
}

export default LoginUI;
