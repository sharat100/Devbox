import React, { useState } from 'react';
import DashboardUI from './DashboardUI';

function Dashboard({ setIsAuthenticated }) {
  return (
    <DashboardUI
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

export default Dashboard;
