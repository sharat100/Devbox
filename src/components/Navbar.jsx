import React from 'react';

function Navbar({ user, onLogout }) {
  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '72px',
      backgroundColor: 'white',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    title: {
      margin: 0,
      fontSize: '22px',
      color: '#333',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    userDetails: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontSize: '14px',
    },
    avatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
    },
    logoutButton: {
      backgroundColor: 'transparent',
      color: '#333',
      border: '1px solid #aaa',
      padding: '6px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Devbox Portal</h1>
      <div style={styles.right}>
        <div style={styles.userDetails}>
          <span>{user.name}</span>
          <span style={{ fontSize: '12px', color: '#888' }}>{user.designation}</span>
        </div>
        <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
        <button
          style={styles.logoutButton}
          onClick={onLogout}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
