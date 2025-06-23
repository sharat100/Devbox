import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Card from '../../components/card';
import Data from '../../Services/Data';
import Table from '../../components/Table';
import './DashboardUI.css';
import userAvatar from '../../assets/user.jpg';

function DashboardUI({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
    navigate('/');
  };

  const user = {
    name: 'Ashok',
    designation: 'Admin',
    avatar: userAvatar,
  };

  return (
    <div className="dashboard-page">
      <Navbar user={user} onLogout={handleLogout} />

      <div className="dashboard-content">
        <Card style={{
          border: '1px solid #e2e8f0',
          padding: '24px',
          borderRadius: '12px',
        }}>
          <Table data={Data} />
        </Card>
      </div>
    </div>
  );
}

export default DashboardUI;
