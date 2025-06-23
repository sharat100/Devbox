import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  const handleAuthChange = (value) => {
    setIsAuthenticated(value);
    localStorage.setItem('auth', value ? 'true' : 'false');
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setIsAuthenticated={handleAuthChange} />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard setIsAuthenticated={handleAuthChange} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
